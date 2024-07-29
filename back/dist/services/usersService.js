"use strict";
// En el servicio de usuarios:
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
exports.createUser = exports.getAllUserById = exports.getAllUser = void 0;
// Implementar una función que pueda retornar el arreglo completo de usuarios.
// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const credentialService_1 = require("./credentialService");
const users = [];
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield data_source_1.AppDataSource.getRepository(User_1.User).find();
    if (!allUser) {
        throw Error("no se encuentra usuario");
    }
    else {
        return allUser;
    }
});
exports.getAllUser = getAllUser;
const getAllUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({
        id,
    });
    return user;
});
exports.getAllUserById = getAllUserById;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
            const usersData = yield userRepository.create(user);
            // Crea las credenciales para el nuevo usuario
            const newCredentialId = yield (0, credentialService_1.createCredentials)(user.username, user.password);
            usersData.credentialsId = newCredentialId;
            const results = yield userRepository.save(usersData);
            // Retorna el nuevo usuario creado
            return results;
        }
        catch (error) {
            console.error("Error al crear el usuario:", error);
            throw error;
        }
    });
}
exports.createUser = createUser;
