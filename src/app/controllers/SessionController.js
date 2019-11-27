// Arquivo que vai realizar a criação da sessão do usuário
import jwt from 'jsonwebtoken';
import Mentor from '../models/Mentor';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const mentor = await Mentor.findOne({ where: { email } });

    if (!mentor) {
      return res.status(401).json({ error: 'Mentor not found' });
    }

    if (!(await mentor.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = mentor;

    return res.json({
      mentor: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
