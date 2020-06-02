import Knex from 'knex';

export default async function seed(knex: Knex) {
  knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Óleo de cozinha', image: 'oleo.svg' },
    { title: 'Papéis e papelão', image: 'papeis-papelao.svg' },
    { title: 'Pilhas e baterias', image: 'baterias.svg' },
    { title: 'Resíduos eletrônicos', image: 'eletronicos.svg' },
    { title: 'Resíduos orgânicos', image: 'organicos.svg' },
  ]);
}
