// En el servicio de credenciales:

import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credential";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

// Función para crear un nuevo conjunto de credenciales
export const createCredentials = async (username: string, password: string) => {
  const crtialRepository = AppDataSource.getRepository(Credential);
  const cretialData = await crtialRepository.create({ username, password });

  const rsulCrt = await crtialRepository.save(cretialData);
  return rsulCrt.id;
};
// Función para validar las credenciales
// export const validarCredentials = async (
//   username: string,
//   password: string
// ): Promise<number | undefined> => {
//   try {
//     // Buscar las credenciales en la base de datos
//     const foundCredential = await AppDataSource.getRepository(
//       Credential
//     ).findOne({
//       where: {
//         username,
//       },
//     });

//     // Verificar si se encontraron las credenciales y si la contraseña es correcta
//     if (foundCredential && foundCredential.password === password) {
//       return foundCredential.id; // Retorna el ID del par de credenciales si las credenciales son válidas
//     } else {
//       return undefined; // Retorna 'undefined' si las credenciales no son válidas
//     }
//   } catch (error) {
//     console.error("Error al validar las credenciales y obtener el ID:", error);
//     throw error;
//   }
// };
//
export async function validateCredentialsAndGetId(
  username: string,
  password: string
): Promise<number | undefined> {
  try {
    // Obtener el repositorio de la entidad Credential
    const credentialRepository = AppDataSource.getRepository(Credential);

    // Buscar las credenciales por nombre de usuario en la base de datos
    const foundCredential = await credentialRepository.findOne({
      where: {
        username,
      },
    });

    console.log(foundCredential?.password, password);

    // Verificar si se encontraron las credenciales y si la contraseña es correcta
    if (foundCredential && foundCredential.password === password) {
      return foundCredential.id; // Retorna el ID del par de credenciales si las credenciales son válidas
    } else {
      return undefined; // Retorna 'undefined' si las credenciales no son válidas
    }
  } catch (error) {
    // Manejar errores, si los hay
    console.error("Error al validar las credenciales:", error);
    throw error;
  }
}
