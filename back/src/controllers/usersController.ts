import { Request, Response } from "express";
import {
  getAllUser,
  getAllUserById,
  createUser,
} from "../services/usersService";
import { validateCredentialsAndGetId } from "../services/credentialService";
import { User } from "../entities/User";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const usersGetCtro: User[] = await getAllUser();
    res.status(200).json(usersGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const getUsersIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userIdgetctro: User | null = await getAllUserById(Number(id));
    res.status(200).json(userIdgetctro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const createUserController = async (req: Request, res: Response) => {
  try {
    const userData: User = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: "no se creo usuario", error });
  }
};

export const postUserLoginController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Busca el usuario por su nombre de usuario
    const crdencial = await validateCredentialsAndGetId(username, password);

    if (crdencial !== undefined) {
      res.status(200).json({ id: crdencial, message: "coincidencias" });
    } else {
      res.status(401).json({
        message: "Credenciales incorrectas",
      });
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
