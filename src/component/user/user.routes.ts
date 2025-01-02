import { Router } from "express";
import userController from "./user.controller";
import { protect } from "../../middleware/jwt";
import upload from "../../middleware/multer";

const userRoutes = Router();

userRoutes.get("", protect, userController.getAllUsers);
userRoutes.get("/:id", protect, userController.getUser);
userRoutes.put("/:id", protect, userController.updateUser);
userRoutes.delete("/:id", protect, userController.deleteUser);
userRoutes.post(
  "/profile/:userId", // Add `userId` as a route parameter
  protect,
  upload.single("profile"), // Use the named import
  userController.uploadProfile
);

export default userRoutes;
