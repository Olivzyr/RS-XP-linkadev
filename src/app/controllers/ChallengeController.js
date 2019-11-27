import Challenge from '../models/Challenge';


class ChallengeController {
  async index(req, res) {
    /**
     * show 20 enrollment for page
     */
    const challenge = await Challenge.findAll({
      order: [['createdAt', 'DESC']],
    });
    console.log(challenge);
    return res.json(challenge);
  }

}

export default new ChallengeController();
