import * as Yup from "yup";

import Indicator from "../models/Indicator";

class IndicatorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      sexo: Yup.boolean().required(),
      altura: Yup.number().required(),
      peso: Yup.number().required(),
      imc: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const { sexo, altura, peso, imc } = await Indicator.create(req.body);

    return res.json({
      sexo,
      altura,
      peso,
      imc
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      altura: Yup.number(),
      peso: Yup.number(),
      imc: Yup.number()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }
    const { altura, peso, imc } = await Indicator.update(req.body, {
      where: {}
    });

    return res.json({
      altura,
      peso,
      imc
    });
  }
}

export default new IndicatorController();
