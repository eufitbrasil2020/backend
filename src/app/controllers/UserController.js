import * as Yup from "yup";
import User from "../models/User";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const userExists = await User.findOne({
      where: { username }
    });

    if (userExists) {
      return res.status(400).json({ error: "Usuário já cadastrado" });
    }
    const { id, username, nome } = await User.create(req.body);

    return res.json({
      id,
      username,
      nome
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      username: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const { username, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (username !== user.username) {
      const userExists = await User.findOne({ where: { username } });

      if (userExists) {
        res.status(400).json({ error: "Usuário já cadastrado" });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const { id, nome, password } = await User.update(req.body, {
      where: { username }
    });

    return res.json({
      id,
      nome,
      password
    });
  }
}

export default new UserController();
