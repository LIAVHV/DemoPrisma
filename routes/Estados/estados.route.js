import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();
const router = Router();

router.route('/estados')
    .get(async (req, res) => {
        const datos = await prisma.Estados.findMany();
        res.json(datos);
    })
    .post(
        [
            // Aplicar validaciones utilizando express-validator
            body('Nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
            body('Nombre').isLength({ max: 35 }).withMessage('El campo Nombre debe tener como máximo 35 caracteres'),
            body('Nombre').trim(),
            body('Nombre').toUpperCase(),
            // Puedes agregar más validaciones según tus necesidades
        ],
        async (req, res) => {
            // Comprobar si hubo errores de validación
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            try {
                // Crear el estado en la base de datos
                const model = await prisma.Estados.create({
                    data: req.body
                });
                res.json(model);
            } catch (error) {
                // Manejar errores de la base de datos
                res.status(500).json({ error: "Error al crear el estado en la base de datos." });
            }
        }
    );

router.route('/estados/:id')
    .get(async (req, res) => {
        const id = parseInt(req.params.id);
        const datos = await prisma.Estados.findFirst({
            where: {
                EstadosId: id
            }
        });

        if (!datos) {
            return res.status(404).json({ error: "Record not found" });
        }

        res.json(datos);
    })
    .put(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.Estados.findFirst({
            where: {
                EstadosId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const model = await prisma.Estados.update({
            where: {
                EstadosId: id
            },
            data: req.body
        });

        return res.json(model);
    })
    .delete(async (req, res) => {
        const id = parseInt(req.params.id);

        const existingModel = await prisma.Estados.findFirst({
            where: {
                EstadosId: id
            }
        });

        if (!existingModel) {
            return res.status(404).json({ error: "Record not found" });
        }

        const deletedModel = await prisma.Estados.delete({
            where: {
                EstadosId: id
            }
        });

        return res.json(deletedModel);
    });

export default router;