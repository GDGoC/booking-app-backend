import { Router } from "express";
import userController from "../component/user/user.controller";
import { protect } from "../middleware/jwt";

const userRoutes = Router();

userRoutes.get("/users", protect, userController.getAllUsers);
userRoutes.get("/user/:id", protect, userController.getUser);
userRoutes.put("/user/:id", protect, userController.updateUser);
userRoutes.delete("/deleteUser/:id", protect, userController.deleteUser);

export default userRoutes;
