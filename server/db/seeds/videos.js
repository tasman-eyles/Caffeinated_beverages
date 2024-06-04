/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('videos').del()
  await knex('videos').insert([
    {
      id: 1,
      name: 'lady',
      url: 'https://youtu.be/_bUG6jhT2W4?si=spgXGh8bGgyKMScp',
    },
    {
      id: 2,
      name: 'jimmy',
      url: 'https://youtu.be/LB871SVYMhI?si=G7ZEEDkH2xfYgAVi',
    },
    {
      id: 3,
      name: 'sea bear',
      url: 'https://youtu.be/shrcT1EN4Sc?si=XOirFnUQpvXxQPN6',
    },
  ])
}
