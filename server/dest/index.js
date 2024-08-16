"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let port = 1234;
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("home");
});
app.listen(port, () => {
    console.log("port is start");
});
