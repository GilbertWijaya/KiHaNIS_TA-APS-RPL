import express from "express";
import { getSales,getSalesById,createSales,updateSales,deleteSales } from "../controllers/Sales.js";
import {verifyAdmin} from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {fileSize : 10 * 1024 * 1024}
});

router.get("/sales",verifyAdmin,getSales);
router.get("/sales/:id",verifyAdmin,getSalesById);
router.post("/sales",verifyAdmin,createSales);
router.patch("/sales/:id",upload.single("ProfilePicture"),updateSales);
router.delete("/sales/:id",verifyAdmin,deleteSales);

export default router;

