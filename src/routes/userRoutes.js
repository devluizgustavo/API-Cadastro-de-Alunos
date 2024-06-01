import { Router } from "express";
import userController from "../controllers/UserController";
const router = new Router();

router.post("/", userController.store);

export default router;

/*
Até 5 métodos em cada controller

Listar usuários --> Index
Store/Create --> Cria um novo usuário
Delete --> Apaga um usuário
Show --> Mostra um usuário
Update --> Atualiza um usuário

*/
