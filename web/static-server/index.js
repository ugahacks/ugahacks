"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    var name = process.env.NAME || 'World';
    res.send("Hello " + name + "!");
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("helloworld: listening on port " + port);
});
