import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/portifolio-pessoal', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conexão feito com sucesso !'))
    .catch((e) => console.log('ERRO NA CONEXÃO: ', e));

mongoose.Promise = global.Promise;

export default mongoose;