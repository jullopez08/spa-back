"use strict";
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
exports.postUserLoginController = exports.createUserController = exports.getUsersIdController = exports.getUsersController = void 0;
const usersService_1 = require("../services/usersService");
const credentialService_1 = require("../services/credentialService");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersGetCtro = yield (0, usersService_1.getAllUser)();
        res.status(200).json(usersGetCtro);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUsersController = getUsersController;
const getUsersIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userIdgetctro = yield (0, usersService_1.getAllUserById)(Number(id));
        res.status(200).json(userIdgetctro);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUsersIdController = getUsersIdController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield (0, usersService_1.createUser)(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: "no se creo usuario", error });
    }
});
exports.createUserController = createUserController;
const postUserLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        // Busca el usuario por su nombre de usuario
        const crdencial = yield (0, credentialService_1.validateCredentialsAndGetId)(username, password);
        if (crdencial !== undefined) {
            res.status(200).json({ id: crdencial, message: "coincidencias" });
        }
        else {
            res.status(401).json({
                message: "Credenciales incorrectas",
            });
        }
    }
    catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});
exports.postUserLoginController = postUserLoginController;
