import { Router } from "express";
import {healthCheck} from "../controllers/healthcheck.controllers.js"
const router = Router()
router.get("/healthcheck", healthCheck)

export default router