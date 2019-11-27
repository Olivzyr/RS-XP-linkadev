module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'company',
      [
        {
          name: 'Rocket Seat',
          about: 'Empresa responsavel pela RSXP',
          document_value: '17.830.029/0001-01',
          document_type_id: '2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alura',
          about: 'Empresa responsavel pela caelum online',
          document_value: '17.213.123/0001-01',
          document_type_id: '2',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
