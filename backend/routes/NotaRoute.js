import express from "express";
import { getNotaByUserId,getNotaBySalesId,getNotaByAdminId,createNota,deleteNota,getNotaById,updateNota } from "../controllers/Nota.js";
import {verifyAdmin,AdminOnly,verifyUser} from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {fileSize : 10 * 1024 * 1024}
});

router.get("/nota/user/:id",getNotaByUserId);
router.get("/nota/sales",getNotaBySalesId);
router.get("/nota/admin",getNotaByAdminId);
router.get("/nota/getnota/:id",getNotaById);
router.post("/nota",verifyUser,upload.single("buktiPembayaran"),createNota);
router.patch("/nota/:id",AdminOnly,verifyAdmin,updateNota);
router.delete("/nota/:id",AdminOnly,verifyAdmin,deleteNota);

export default router;

