import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from '../models/Foto';

// upload.single --> Especificar que será recebido somente um arquivo. Ele receberá um parametro que será o nome do campo que o arquivo sera enviado
const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, aluno_id, filename });

      return res.json(foto);
    });
  }
}

export default new FotoController();
