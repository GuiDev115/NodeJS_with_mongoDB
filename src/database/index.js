import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/portifolio-pessoal', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connected'))
    .catch((e) => console.log('ERRO: ', e));

mongoose.Promise = global.Promise;

export default mongoose;