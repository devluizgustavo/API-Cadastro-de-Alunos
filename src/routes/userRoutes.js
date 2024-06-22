import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";
const router = new Router();

//Em aplicações do mundo real, algumas coisas do crud não deveria existir, como as duas rotas abaixo, que lista todos os usuários...Isto gera uma falha de segurança.

//Não deveria existir em um projeto real
// router.get("/", userController.index); //Listar usuários
// router.get("/:id", userController.show); //Listar um usuário

//Pode existir para o usuário fazer o login
router.post("/", userController.store);

//Podem existir, PORÉM tem que ser passado um middleware para checar se o usuário está logado e usar o ID dele para atualizar ou deletar algo dentro da conta dele.
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
Até 5 métodos em cada controller

Listar usuários --> Index
Store/Create --> Cria um novo usuário
Delete --> Apaga um usuário
Show --> Mostra um usuário
Update --> Atualiza um usuário

*/
