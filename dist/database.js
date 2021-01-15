"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var dbConnection = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rest-api-photo-gallery-mern"
});
dbConnection.connect(function (err) {
    if (!err) {
        console.log("DB is connected");
    }
    else {
        console.error(err);
    }
});
exports.default = dbConnection;
