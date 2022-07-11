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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenedor = void 0;
const fs_1 = __importDefault(require("fs"));
class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
        this.fileName = fileName + '.txt';
        if (!fs_1.default.existsSync(this.fileName)) {
            fs_1.default.promises.writeFile(this.fileName, JSON.stringify([]));
        }
        else {
            console.log('Ya existe');
        }
    }
    save(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield fs_1.default.promises.readFile(this.fileName, 'utf-8');
                const listadoProductos = yield JSON.parse(document);
                listadoProductos.length
                    ? producto.id = listadoProductos[listadoProductos.length - 1].id + 1
                    : producto.id = 1;
                listadoProductos.push(producto);
                yield fs_1.default.promises.writeFile(this.fileName, JSON.stringify(listadoProductos, null, 2));
                return producto.id;
            }
            catch (error) {
                throw new Error('Error guardando archivo');
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs_1.default.promises.readFile(this.fileName, 'utf-8');
                const productos = yield JSON.parse(data);
                return (productos.find((producto) => producto.id === id) || null);
            }
            catch (error) {
                throw new Error(`Error en la consulta`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs_1.default.promises.readFile(this.fileName, 'utf-8');
                const productos = yield JSON.parse(data);
                return productos;
            }
            catch (error) {
                throw new Error('Error obteniendo registros');
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs_1.default.promises.readFile(this.fileName, 'utf-8');
                const productos = yield JSON.parse(data);
                const productosFiltrados = productos.filter((producto) => producto.id !== id);
                yield fs_1.default.promises.writeFile(this.fileName, JSON.stringify(productosFiltrados, null, 2));
                console.log(`Registro con id ${id} eliminado`);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.default.promises.writeFile(this.fileName, JSON.stringify([], null, 2));
                console.log('Todos los registros fueron eliminados');
            }
            catch (error) {
                throw new Error('Error eliminando registros');
            }
        });
    }
    update(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs_1.default.promises.readFile(this.fileName, 'utf-8');
                const productos = yield JSON.parse(data);
                const productosFiltrados = productos.filter((producto) => producto.id !== id);
                producto.id = id;
                productosFiltrados.push(producto);
                yield fs_1.default.promises.writeFile(this.fileName, JSON.stringify(productosFiltrados, null, 2));
                console.log(`Registro con id ${id} actualizado`);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.Contenedor = Contenedor;
//# sourceMappingURL=contenedor.js.map