import { Router } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "@/app/schemas/User";
import authConfig from "@/config/Auth"
import Mailer from "@/app/modules/Mailer";

const router = new Router();

const generateToken = params => {
    return jwt.sign(
        params, authConfig.secret, {
            expiresIn: 86400,
        });
};

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
    const { email, password } = req.body;

    User.findOne({ email })
        .select("+password")
        .then(user => {
            if (user) {
                bcrypt
                    .compare(password, user.password)
                    .then(result => {
                        if (result) {
                            const token = generateToken({ uid: user.id })
                            return res.send({ token: token, tokenExpiration: "1d" })
                        } else {
                            return res.status(400).send({ error: "Senha invalida" });
                        }
                    })
                    .catch(error => {
                        console.error("Error ao verificar senha", error);
                        return res.status(500).send({ error: "user not found" });
                    });
            } else {
                return res.status(404).send({ error: "user not found" });
            }

        }).catch(error => {
            console.error("Erro ao logar", error);
            return res.status(500).send({ error: "internal error server" });
        })
});

router.post("/forgot-password", (req, res) => {
    const { email } = req.body;

    User.findOne({ email }).then(user => {
        if (user) {
            const token = crypto.randomBytes(20).toString("hex");
            const expiration = new Date();
            expiration.setHours(new Date().getHours + 3);

            User.findByIdAndUpdate(user.id, {
                $set: {
                    passwordResetToken: token,
                    passwordResetTokenExpiration: expiration
                }
            }).then(() => {
                Mailer.sendMail({
                    to: email,
                    from: "webmaster@testeexpress.com",
                    template: "auth/forgot_password.html",
                    context: { token }
                }, error => {
                    if (error) {
                        console.error("Erro ao enviar email", error);
                        return res.status(400).send({ error: "Fail send recover password mail" });
                    } else {
                        return res.send();
                    }
                })
            }).catch(error => {
                console.error("Erro ao salvar o token de rec de senha", error);
                return res.status(500).send({ error: "Internal server error" });
            })
        } else {
            return res.status(404).send({ error: "user not found" });
        }
    })
});

router.post("/reset-password", (req, res) => {

});

export default router;