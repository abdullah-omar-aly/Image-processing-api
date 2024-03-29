"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRouter_js_1 = require("./routes/imageRouter.js");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("hello");
});
app.use("/api", imageRouter_js_1.router);
app.listen(3000, function () {
    console.log("server running on port: 3000");
});
exports.default = app;
