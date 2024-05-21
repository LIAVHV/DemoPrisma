import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.route('/municipios')
    .get(async (req, res) => {
        try {
            const municipios = await prisma.Municipios.findMany({
                include: {
                    Estados: true // Incluir la relación con el estado
                }
            });
            res.json(municipios);
        } catch (error) {
            console.error("Error al obtener los municipios:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    })
    .post(async (req, res) => {
        const model = await prisma.Municipios.create({
            data: req.body
        });
        res.json(model);
    });

router.route('/municipios/:id')
    .get(async (req, res) => {
        const id = parseInt(req.params.id);
        const datos = await prisma.Municipios.findFirst({
            where: {
                MunicipiosId: id
            }
        });

        if (!datos) {
            return res.status(404).json({ error: "Record not found" });
        }

        res.json(datos);
    })
    .put(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.Municipios.findFirst({
            where: {
                MunicipiosId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const model = await prisma.Municipios.update({
            where: {
                MunicipiosId: id
            },
            data: req.body
        });

        return res.json(model);
    })
    .delete(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.Municipios.findFirst({
            where: {
                MunicipiosId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const deletedModel = await prisma.Municipios.delete({
            where: {
                MunicipiosId: id
            }
        });

        return res.json(deletedModel);
    });

export default router;