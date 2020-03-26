import * as Yup from "yup";
import Ciclo from "../models/Ciclo";

class CicloController {
  async store(req, res) {
    const schema = Yup.object().shape({
      dia: Yup.number().required(),
      mes: Yup.number().required(),
      ano: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const { dia, mes, ano } = await Ciclo.create(req.body);

    return res.json({
      dia,
      mes,
      ano
    });
  }
}

export default new CicloController();
