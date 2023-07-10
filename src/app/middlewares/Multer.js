import multer from 'multer';
import Slugfy from '../../utils/Slugfy';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/img');
    },
    filename: (req, file, cb) => {
        const [filename, extensao] = file.originalname.split('.');
        cb(null, `${Slugfy(filename)}.${extensao}`);
    },
});

export default multer({ storage });