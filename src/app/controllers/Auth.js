import { Router } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "@/app/schemas/User";

const router = new Router();

router.post('/register', (req, res) => {

    const { email, name, password } = req.body;

    User.findOne({ email })
        .then(userData => {
            if (userData) {
                return res.status(400).send({ error: "usuario ja existe" });
            } else {
                User.create({ name, email, password })
                    .then(user => {
                        //user.password = undefined;
                        return res.send({ user });
                    })
                    .catch(error => {
                        console.error("erro ao salvar o usuario", error);
                        return res.status(400).send({ error: "Registro falhou" });
                    });
            }
        })
        .catch(error => {
            console.error("Error ao consultar usuario no banco de dados", err);
            return res.status(500).send({ error: "Registro falhou" });
        });
});

router.post("/login", (req, res) => {

});

router.post("/forgot-password", (req, res) => {

});

router.post("/reset-password", (req, res) => {

});

export default router;