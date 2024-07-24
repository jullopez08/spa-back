// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.
import { Router } from "express";
import {
  getUsersController,
  getUsersIdController,
  createUserController,
  postUserLoginController,
} from "../controllers/usersController";

const router: Router = Router();

router.get("/", getUsersController);

router.get("/:id", getUsersIdController);

router.post("/register", createUserController);

router.post("/login", postUserLoginController);

export default router;
