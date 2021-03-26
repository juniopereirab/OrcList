import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const uploads = multer({storage: storage});

export default uploads;