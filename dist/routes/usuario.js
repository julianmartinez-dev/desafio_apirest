"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(usuarios_1.getAllProducts)
    .post(usuarios_1.addProduct);
router
    .route('/:id')
    .get(usuarios_1.getProductById)
    .delete(usuarios_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=usuario.js.map