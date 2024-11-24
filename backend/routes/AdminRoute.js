import express from "express";
import {getAdmins,getAdminById,createAdmin,updateAdmin,deleteAdmin} from "../controllers/Admin.js";
import {AdminOnly} from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {fileSize : 10 * 1024 * 1024}
});

router.get("/admin",getAdmins);
router.get("/admin/:id",getAdminById);
router.post("/admin",createAdmin);
router.patch("/admin/:id",AdminOnly,upload.single("ProfilePicture"),updateAdmin);
router.delete("/admin/:id",deleteAdmin);

export default router;

