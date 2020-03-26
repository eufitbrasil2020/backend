import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import IndicatorController from "./app/controllers/IndicatorController";
import FcpaController from "./app/controllers/FcpaController";
import CicloController from "./app/controllers/CicloController";

import authMiddleware from "./app/middleware/auth";

const routes = new Router();

routes.post("/cadastro", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.put("/cadastro", UserController.update);

routes.post("/indicadores", IndicatorController.store);
routes.put("/indicadores", IndicatorController.update);

routes.post("/fcpa", FcpaController.store);

routes.post("/ciclo", CicloController.store);

export default routes;
