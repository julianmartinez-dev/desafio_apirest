"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_1 = __importDefault(require("./routes/productos"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/productos', productos_1.default);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
app.on("error", e => console.log('Error: ', e));
//# sourceMappingURL=app.js.map