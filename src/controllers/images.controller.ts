import { Request, Response } from 'express'
import fs from 'fs'
import dbConnection from '../database'

export const getAllImages = (req: Request, res: Response) => {
    dbConnection.query("SELECT * FROM images", (err, rows) => {
        if (!err) {
            return res.json({
                images: rows
            })
        } else {
            console.error(err)
            return res.json({ 
                message: "Error al obtener las imagenes"
            })
        }
    })
}

export const getOneImage = (req: Request, res: Response) => {
    const { id } = req.params;

    dbConnection.query("SELECT * FROM images WHERE id=?", [id], (err, rows) => {
        if (!err) {
            return res.json({
                imageFounded: rows
            })
        } else { 
            console.error(err)
            return res.json({
                message: "La imagen con el id:" + id + " no fue encontrada"
            })
        }
    })
}

export const createImage = (req: Request, res: Response) => {
    const { title, description } = req.body;
    const { path } = req.file;
    console.log(req.file)
    dbConnection.query("INSERT INTO images (title,description,imagePath)  VALUES(?,?,?)", [title, description, path], (err, rows,fields) => {
        if (!err) {
            return res.json({
                message: "Imagen guardada",
            })
        } else {
            console.error(err)
            return res.json({
                message: "Error al guardar la imagen"
            })
        }
    })
}

export const deleteImage = (req: Request, res: Response) => {
    const { id } = req.params;

    dbConnection.query("SELECT * FROM images WHERE id=?", [id], (err, rows) => {
        if (!err) {
            const imagePath = rows[0].imagePath;
            dbConnection.query("DELETE FROM images WHERE id=?", [id], async (err) => {
                if (!err) {
                    await fs.unlinkSync(imagePath)
                    return res.json({
                        message: "Imagen eliminada"
                    })
                } else {
                    console.error(err)
                    return res.json({
                        message: "Error al eliminar la imagen"
                    })
                }
            })
        } else {
            console.error(err)
            return res.json({
                message: "Error al eliminar la imagen"
            })
        }
    })
}

export const updateImage = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, imagePath } = req.body;
    const updatedAt = new Date();

    dbConnection.query("UPDATE images SET title=?,description=?,imagePath=?,updatedAt=? WHERE id=?", [title, description, imagePath, updatedAt, id], async (err) => {
        if (!err) {
            return res.json({
                message: "Imagen actualizada"
            })
        } else {
            console.error(err)
            return res.json({
                message: "Error al actualizar la imagen"
            })
        }
    })
}