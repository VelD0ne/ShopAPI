"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const test_1 = __importDefault(require("./routes/test"));
const product_1 = __importDefault(require("./routes/product"));
const cart_1 = __importDefault(require("./routes/cart"));
const app = (0, express_1.default)();
dotenv_1.default.config(); //Reads .env file and makes it accessible via process.env
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((0, express_session_1.default)({ secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true }));
app.use('/', test_1.default);
app.use('/api', product_1.default);
app.use('/', cart_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
