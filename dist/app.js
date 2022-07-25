"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const test_1 = __importDefault(require("./routes/test"));
const product_1 = __importDefault(require("./routes/product"));
const app = (0, express_1.default)();
dotenv_1.default.config(); //Reads .env file and makes it accessible via process.env
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use('/', test_1.default);
app.use('/api', product_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
