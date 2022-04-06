import { Router } from "express";
import CloudWiseNetworkController from "../controllers/CloudWiseNetworkController";

const cloudWiseNetworkRouter = Router();
const cloudWiseController = new CloudWiseNetworkController();

cloudWiseNetworkRouter.get(
  "/",
  cloudWiseController.listJobs
)

export default cloudWiseNetworkRouter;