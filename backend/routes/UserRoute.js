import express from "express";
import {getUsers,getUserById,createUser,updateUser,deleteUser} from "../controllers/Users.js";
import {verifyUser} from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {fileSize : 10 * 1024 * 1024}
});

router.get("/users",getUsers);
router.get("/users/:id",getUserById);
router.post("/users",createUser);
router.patch("/users/:id",verifyUser,upload.single("ProfilePicture"),updateUser);
router.delete("/users/:id",deleteUser);

export default router;

