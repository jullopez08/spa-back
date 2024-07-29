"use strict";
// En el servicio de credenciales:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentialsAndGetId = exports.createCredentials = void 0;
const data_source_1 = require("../config/data-source");
const credential_1 = require("../entities/credential");
// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
// Función para crear un nuevo conjunto de credenciales
const createCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const crtialRepository = data_source_1.AppDataSource.getRepository(credential_1.Credential);
    const cretialData = yield crtialRepository.create({ username, password });
    const rsulCrt = yield crtialRepository.save(cretialData);
    return rsulCrt.id;
});
exports.createCredentials = createCredentials;
function validateCredentialsAndGetId(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Obtener el repositorio de la entidad Credential
            const credentialRepository = data_source_1.AppDataSource.getRepository(credential_1.Credential);
            // Buscar las credenciales por nombre de usuario en la base de datos
            const foundCredential = yield credentialRepository.findOne({
                where: {
                    username,
                },
            });
            console.log(foundCredential === null || foundCredential === void 0 ? void 0 : foundCredential.password, password);
            // Verificar si se encontraron las credenciales y si la contraseña es correcta
            if (foundCredential && foundCredential.password === password) {
                return foundCredential.id; // Retorna el ID del par de credenciales si las credenciales son válidas
            }
            else {
                return undefined; // Retorna 'undefined' si las credenciales no son válidas
            }
        }
        catch (error) {
            // Manejar errores, si los hay
            console.error("Error al validar las credenciales:", error);
            throw error;
        }
    });
}
exports.validateCredentialsAndGetId = validateCredentialsAndGetId;
