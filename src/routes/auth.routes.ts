import { Router } from "express";
import authController from "../component/auth/auth.controller";
import {
  login_query_validator,
  register_query_validator,
} from "../validation/auth.validation";
import { validateSchema } from "../middleware/ValidationMiddleware";
const authRoutes = Router();

authRoutes.post(
  "/signup",
  validateSchema(register_query_validator), // Use the named import
  authController.signup
);

authRoutes.post(
  "/login",
  validateSchema(login_query_validator), // Use the named import
  authController.login
);

export default authRoutes;
