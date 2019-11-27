module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'challenges',
      [
        {
          title: 'Desenvolva uma APIRest',
          company: 'rocketseat',
          detail: 'Utilizando NODE.JS e express crie uma APIRest que seja capaz de cadastrar informações de estoque para auxiliar uma loja',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Desenvolva uma pagina web',
          company: 'rocketseat',
          detail: 'Utilizando reactjs construa uma pagina responsiva que busque informações de uma APIRest do desafio anterior',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
