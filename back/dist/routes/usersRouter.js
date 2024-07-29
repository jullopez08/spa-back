"use strict";
// GET /users => Obtener el listado de todos los usuarios.
Object.defineProperty(exports, "__esModule", { value: true });
// GET /users/:id => Obtener el detalle de un usuario específico.
// POST /users/register => Registro de un nuevo usuario.
// POST /users/login => Login del usuario a la aplicación.
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get("/", usersController_1.getUsersController);
router.get("/:id", usersController_1.getUsersIdController);
router.post("/register", usersController_1.createUserController);
router.post("/login", usersController_1.postUserLoginController);
exports.default = router;
