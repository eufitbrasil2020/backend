import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { username: req.body.username }
    });

    if (userExists) {
      return res.status(400).json({ error: "Usuário já cadastrado" });
    }
    const {
      id,
      username,
      nome,
      idade,
      sexo,
      previous,
      estatura,
      imc
    } = await User.create(req.body);

    return res.json({
      id,
      username,
      nome,
      idade,
      sexo,
      previous,
      estatura,
      imc
    });
  }
}

export default new UserController();
