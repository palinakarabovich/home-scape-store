import { ICategory } from "../@types/types";

const categories: Array<ICategory>= [
  {
    name: 'furniture',
    subcategories: [
      {
        name: 'Table',
        url: '/table',
        subcategories: []
      },
      {
        name: 'Shelf',
        url: '/shelf',
        subcategories: []
      },
      {
        name: 'Chair',
        url: '/chair',
        subcategories: []
      },
      {
        name: 'Sofa',
        url: '/sofa',
        subcategories: []
      },
      {
        name: 'Stand',
        url: '/stand',
        subcategories: []
      }
    ],
    image: 'https://static.tildacdn.com/tild6132-3066-4866-a331-373137353330/2.jpg',
    url: '/furniture'
  },
  {
    name: 'accessories',
    subcategories: [
      {
        name: 'Vase',
        url: '/vase',
        subcategories: []
      },
      {
        name: 'Pot',
        url: '/pot',
        subcategories: []
      },
      {
        name: 'Lamp',
        url: '/lamp',
        subcategories: []
      }
    ],
    image: 'https://static.tildacdn.com/tild3639-3531-4161-b066-323233633138/10294067644_65ec5f9ef5_o.jpg',
    url: '/accessories'
  }
]

export default categories;