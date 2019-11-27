import Challenge from '../models/Challenge';


class ChallengeController {
  async index(req, res) {
    const { page = 1 }= req.query;

    const challenger_id = req.params.id;
    const challenger = await Student.findByPk(challenger_id);

    /**
     * Questions no answers for one user
     */

    if(challenger) {
      const challengerHaveStudent = await Challenger.findAll({
        where: { name },
        order: [['createdAt', 'DESC']],
        limit: 20,
        offset: ( page - 1 ) * 20,
      });

      return res.json(challengerHaveStudent);
    }else {
      /**
       * No challenger for all challengers
       */
      const challengerHaveStudent = await Challenger.findAll({
        where: { challenger_id: null },
        order: [['createdAt', 'DESC']],
        limit: 20,
        offset: ( page - 1 ) * 20,
      });
      return res.json(challengerHaveStudent);
    }


  }

}

export default new ChallengeController();
