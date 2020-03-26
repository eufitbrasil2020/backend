import * as Yup from "yup";
import FcPaUser from "../models/FcPaUser";

class FcpaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      fc: Yup.number().required(),
      pa: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const { fc, pa } = await FcPaUser.create(req.body);

    return res.json({
      fc,
      pa
    });
  }
}

export default new FcpaController();
