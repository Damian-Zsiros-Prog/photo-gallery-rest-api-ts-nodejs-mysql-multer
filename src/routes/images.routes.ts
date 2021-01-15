import { Router } from 'express'
import { getAllImages, createImage, deleteImage, getOneImage, updateImage } from '../controllers/images.controller'
import multer from '../libs/multer'

const router = Router();
router.get("/", (req, res) => res.redirect("/api/images"))
router.route("/api/images")
    .get(getAllImages)
    .post(multer.single('image'), createImage)
router.route("/api/image/:id")
    .get(getOneImage)
    .put(updateImage)
    .delete(deleteImage)

export default router;