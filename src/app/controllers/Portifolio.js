import { Router } from 'express';
import Project from '@/app/schemas/Project';
import Slugfy from '../../utils/Slugfy';
import slugify from 'slugify';

const router = new Router();

//Mostra apenas Titulo e categoria

/*router.get('/', (req, res) => {

    Project.find().then(data => {
        const projects = data.map(project => {
            return { title: project.title, category: project.category };
        });
        res.send(projects);
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            });
    })

});*/

router.get('/', (req, res) => {

    Project.find().then(projects => {
        res.send(projects);
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            });
    })

})

router.post('/', (req, res) => {
    const { title, slug, description, category } = req.body;
    Project.create({ title, slug, description, category })
        .then(project => {
            res.status(200).send(project);
        })
        .catch(error => {
            console.error("Erro ao salvar novo projeto no banco de dados", error);
            res.status(400)
                .send({
                    error: 'Não foi possivel salvar seu projeto. Verifique os dados e tente novamente',
                });
        });
});

router.put('/:projectId', (req, res) => {

    const { title, description, category } = req.body;
    let slug = undefined;
    if (title) {
        slug = Slugfy(title);
    }
    Project.findByIdAndUpdate(req.params.projectId, { title, slug, description, category }, { new: true })
        .then(project => {
            res.status(200).send(project);
        })
        .catch(error => {
            console.error("Erro ao obter o objeto no banco de dados", error);
            res.status(400)
                .send({
                    error: 'Não foi possivel atualizar o seu projeto. Verifique os dados e tente novamente',
                });
        });

});

router.delete('/:projectId', (req, res) => {

    Project.findByIdAndRemove(req.params.projectId).then(() => {
        res.send({ message: "Projeto removido com sucesso" });
    }).catch(error => {
        console.error("Erro ao remover o projeto", error);
        res.status(400).sent9({ message: "Erro ao remover o projeto, tente novamente" })
    })
});

export default router;