const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'document_type',
      [
        {
          id: '1',
          type: 'cpf',
        },
        {
          id: '2',
          type: 'cnpj',
        },
      ],
      {}
    );
  },

  down: () => {},
};
