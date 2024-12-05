import express from "express";
import {getProducts,getProductById,createProduct,updateProduct,deleteProduct,getProductByKodeToko} from "../controllers/Product.js";
import {verifyAdmin,verifyUser} from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {fileSize : 10 * 1024 * 1024}
});

router.get("/products",verifyAdmin,getProducts);
router.get("/products/:id",getProductById);
router.get("/products/toko",getProductByKodeToko);
router.post("/products",verifyAdmin,upload.single("ProductPicture"),createProduct);
router.patch("/products/:id",verifyAdmin,upload.single("ProductPicture"),updateProduct);
router.delete("/products/:id",verifyAdmin,deleteProduct);

export default router;

