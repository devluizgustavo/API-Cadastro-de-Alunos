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

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.status(200).json(foto);
      } catch(e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        })
      }
    });
  }
}

export default new FotoController();
