import multer from 'multer';
import Slugify from '@/utils/Slugify';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
        const [filename, extensao] = file.originalname.split('.');
        cb(null, `${Slugify(filename)}.${extensao}`);
    },
});

export default multer({ storage });