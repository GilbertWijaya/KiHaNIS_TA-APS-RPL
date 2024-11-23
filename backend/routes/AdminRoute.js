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

// router.get("/admin",AdminOnly,getAdmins);
router.get("/admin",getAdmins);
// router.get("/admin/:id",AdminOnly,getAdminById);
router.get("/admin/:id",getAdminById);
router.post("/admin",createAdmin);
// router.patch("/admin/:id",AdminOnly,updateAdmin);
router.patch("/admin/:id",upload.single("image"),updateAdmin);
router.delete("/admin/:id",AdminOnly,deleteAdmin);

export default router;

