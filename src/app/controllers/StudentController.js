import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    /**
     * show 20 enrollment for page
     */
    const student = await Student.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.json(student);
  }

  // Cadastro de estudante
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      challenge_id: Yup.number().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists. ' });
    }

    const { id, name, email, age, challenge_id } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      challenge_id,
    });
  }

  // Update Estudante
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number().integer(),
      challenge_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    // Encontra o usuário desejado pelo email para edição das informações
    const student = await Student.findOne({ where: { email } });

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    const { id, name, age, challenge_id } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      challenge_id
    });
  }
}

export default new StudentController();
