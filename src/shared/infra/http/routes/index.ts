import cloudWiseNetworkRouter from "src/modules/job/infra/http/routes/CloudWiseNetwork.router";
import { Router } from "express";

const routes = Router();

routes.use('/cloudwisenetwork', cloudWiseNetworkRouter);

export default routes;