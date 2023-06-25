import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Portifolio, Auth } from '@/app/controllers';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/Portifolio', Portifolio);
app.use("/auth", Auth);

console.log(`Servidor rodando no link https://localhost:${port}`);
app.listen(port);