import { Router } from "express";
import loginRequire from '../middlewares/loginRequired';

import FotoController from "../controllers/FotoController";

const router = new Router();

router.post("/", loginRequire, FotoController.store);

export default router;
