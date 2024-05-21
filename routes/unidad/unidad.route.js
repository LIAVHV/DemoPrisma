import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.route('/routes/unidad')
    .get(async (req, res) => {
        const datos = await prisma.directorio.findMany({
            include: {
                Municipio: true,
                Nombramiento: true
            }
        });
        res.json(datos);
    })
    .post(async (req, res) => {
        const model = await prisma.directorio.create({
            data: req.body
        });
        res.json(model);
    });

router.route('/directorio/:id')
    .get(async (req, res) => {
        const id = parseInt(req.params.id);
        const datos = await prisma.directorio.findFirst({
            where: {
                DirectorioId: id
            },
            include: {
                Municipio: true,
                Nombramiento: true
            }
        });

        if (!datos) {
            return res.status(404).json({ error: "Record not found" });
        }

        res.json(datos);
    })
    .put(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.directorio.findFirst({
            where: {
                DirectorioId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const model = await prisma.directorio.update({
            where: {
                DirectorioId: id
            },
            data: req.body
        });

        return res.json(model);
    })
    .delete(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.directorio.findFirst({
            where: {
                DirectorioId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const deletedModel = await prisma.directorio.delete({
            where: {
                DirectorioId: id
            }
        });

        return res.json(deletedModel);
    });

export default router;