"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(productos_1.getAllProducts)
    .post(productos_1.addProduct);
router
    .route('/:id')
    .get(productos_1.getProductById)
    .delete(productos_1.deleteProduct)
    .put(productos_1.updateProduct);
exports.default = router;
//# sourceMappingURL=productos.js.map