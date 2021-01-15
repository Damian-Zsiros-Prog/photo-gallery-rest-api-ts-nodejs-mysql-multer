"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var compression_1 = __importDefault(require("compression"));
var images_routes_1 = __importDefault(require("./routes/images.routes"));
// Initializating express
var app = express_1.default();
// Settings 
app.set("port", process.env.PORT || 3500);
// Middelwares
app.use(express_1.default.static('uploads'));
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(compression_1.default());
// Routes
app.use(images_routes_1.default);
// Initializating server
app.listen(app.get("port"), function () {
    console.log("Server on port", app.get("port"));
});
