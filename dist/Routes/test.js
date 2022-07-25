"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/test", (req, res, next) => {
    res.send("hi");
});
router.get("/", (req, res, next) => {
    res.json({ text: "Hello, World", something: "Hehe" });
});
exports.default = router;
