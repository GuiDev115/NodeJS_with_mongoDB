import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = new Router();

router.get('/uploads/img/:filename', (req, res) => {

    const filePath = path.resolve(`./uploads/img/${req.params.filename}`);
    fs.exists(filePath, (exists) => {
        if (exists) {
            return res.sendFile(filePath);
        } else {
            return res.status(404).send({ error: 'File not found' });
        }
    });
});
export default router;