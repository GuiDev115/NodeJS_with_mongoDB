import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Portfolio } from './app/controllers';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/Portfolio', Portfolio);


console.log(`Servidor rodando no link https://localhost:${port}`);
app.listen(port);

//----------------------------------------------------------------------


/*const router = new Router();

router.get('/', (req, res) => {
    return res.status(200).send({ message: "Hello World" })
});

router.post('/', (req, res) => {
    return res.status(200).send({ dados: req.body });
});

app.use(router);*/