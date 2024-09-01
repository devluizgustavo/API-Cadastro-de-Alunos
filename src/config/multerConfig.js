import multer from "multer";
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    //Validação para ter a certeza que o arquivo é jpg ou png
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'))
    }

    //Caso o arquivo passe pela validação, retorne abaixo true para continuar.
    return cb(null, true);
  },
    storage: multer.diskStorage({
    //Local aonde será salvo
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    //Nome do arquivo
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    }
  })
}
