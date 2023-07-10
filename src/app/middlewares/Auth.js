import jwt from "jsonwebtoken";
import AuthConfig from "@/config/Auth";

export default (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const tokenData = authHeader.split(" ");

        if (tokenData.length !== 2) {
            return res
                .status(401)
                .send({ error: "No valid token provided" });
        }

        const [scheme, token] = tokenData;

        if (scheme.indexOf("Bearer") < 0) {
            return res
                .status(401)
                .json({ error: "No valid token provided" });
        }

        jwt.verify(token, AuthConfig.secret, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .send({ error: "No valid token provided" });
            } else {
                req.uid = decoded.uid;
                return next();
            }
        });
    } else {
        return res.status(401).send({ error: "No valid token provided" });
    }
}