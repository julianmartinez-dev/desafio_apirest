"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.getProductById = exports.getAllProducts = void 0;
const contenedor_1 = require("../contenedor");
const contenedor = new contenedor_1.Contenedor('data');
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield contenedor.getAll();
    if (!products) {
        return res.status(404).json({ message: 'No hay productos' });
    }
    res.json(products);
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'Id inválido' });
    }
    const product = yield contenedor.getById(Number(id));
    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(product);
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, price, thumbnail } = req.body;
    if ([title, price, thumbnail].includes('')) {
        return res.status(400).json({ message: 'Petición incorrecta' });
    }
    price = Number(price);
    const newProductID = yield contenedor.save({ title, price, thumbnail });
    res.json({
        id: newProductID,
        title,
        price,
        thumbnail
    });
});
exports.addProduct = addProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'Id inválido' });
    }
    const product = yield contenedor.getById(Number(id));
    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    yield contenedor.deleteById(Number(id));
    return res.status(200).json({ message: 'Producto eliminado' });
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title = "", price = 0, thumbnail = '' } = req.body;
    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'Id inválido' });
    }
    if ([title, price, thumbnail].includes('' || 0)) {
        return res.status(400).json({ message: 'Petición incorrecta' });
    }
    const productToUpdate = yield contenedor.getById(Number(id));
    if (!productToUpdate) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    yield contenedor.update(Number(id), { title, price, thumbnail });
    return res.status(200).json({ message: 'Producto actualizado' });
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=productos.js.map