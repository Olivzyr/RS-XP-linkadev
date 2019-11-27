// Resgistrando usuários dentro da API

import * as Yup from 'yup';
import Mentor from '../models/Mentor';
import Student from '../models/Student';


class MentorController {
  async index(req, res) {
    const { page = 1 }= req.query;

    const mentor_id = req.params.id;
    const mentor = await Student.findByPk(mentor_id);

    /**
     * Questions no answers for one user
     */

    if(mentor) {
      const mentorHaveStudent = await Mentor.findAll({
        where: { mentor_id },
        order: [['createdAt', 'DESC']],
        limit: 20,
        offset: ( page - 1 ) * 20,
      });

      return res.json(mentorHaveStudent);
    }else {
      /**
       * No student for all mentors
       */
      const mentorHaveStudent = await Mentor.findAll({
        where: { student_id: null },
        order: [['createdAt', 'DESC']],
        limit: 20,
        offset: ( page - 1 ) * 20,
      });
      return res.json(mentorHaveStudent);
    }


  }

  // Função para cadastro de usuário
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      mentor_id: Yup.number().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Verificação se o email do usuário já existe
    const mentorExists = await Mentor.findOne({ where: { email: req.body.email } });

    if (mentorExists) {
      return res.status(400).json({ error: 'Mentor already exists.' });
    }

    // Await aguarda as informações retornadas pelo servidor para evitar que a
    // execução siga sem esses dados
    const { id, name, mentor_id, email } = await Mentor.create(req.body);

    return res.json({
      id,
      name,
      email,
      mentor_id
    });
  }

  // Controle de acesso a rota após autenticação
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      mentor_id: Yup.number().required(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const mentor = await Mentor.findByPk(req.mentorId);

    if (email !== mentor.email) {
      const mentorExists = await Mentor.findOne({ where: { email } });

      if (mentorExists) {
        return res.status(400).json({ error: 'Mentor already exists.' });
      }
    }

    if (oldPassword && !(await mentor.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, mentor_id } = await mentor.update(req.body);

    return res.json({
      id,
      name,
      email,
      mentor_id
    });
  }
}

export default new MentorController();
