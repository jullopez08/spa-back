// En el servicio de usuarios:

// Implementar una función que pueda retornar el arreglo completo de usuarios.

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredentials } from "./credentialService";

const users: User[] = [];

export const getAllUser = async () => {
  const allUser = await AppDataSource.getRepository(User).find();
  if (!allUser) {
    throw Error("no se encuentra usuario");
  } else {
    return allUser;
  }
};
export const getAllUserById = async (id: number): Promise<User | null> => {
  const user = await AppDataSource.getRepository(User).findOneBy({
    id,
  });
  return user;
};

export async function createUser(user: Omit<IUser, "id" | "credentialsId">) {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const usersData = await userRepository.create(user);

    // Crea las credenciales para el nuevo usuario
    const newCredentialId = await createCredentials(
      user.username,
      user.password
    );

    usersData.credentialsId = newCredentialId;
    const results = await userRepository.save(usersData);

    // Retorna el nuevo usuario creado
    return results;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}
