import { Router } from "express";
    import {
      createProduct,
      getAllProducts,
      getProduct,
      updateProduct,
      deleteProduct,
      getProductByName,
    } from "../controllers/cat";
    
    const router = Router();
    router.get("/", getAllProducts);
    router.get("/:id", getProduct);
    router.post("/", createProduct);
    router.put("/:id", updateProduct);
    router.delete("/:id", deleteProduct);
    router.get("/name/:name", getProductByName);
    
    export default router;