"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_controller_1 = require("../controllers/images.controller");
var multer_1 = __importDefault(require("../libs/multer"));
var router = express_1.Router();
router.get("/", function (req, res) { return res.redirect("/api/images"); });
router.route("/api/images")
    .get(images_controller_1.getAllImages)
    .post(multer_1.default.single('image'), images_controller_1.createImage);
router.route("/api/image/:id")
    .get(images_controller_1.getOneImage)
    .put(images_controller_1.updateImage)
    .delete(images_controller_1.deleteImage);
exports.default = router;
