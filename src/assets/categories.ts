import { ICategory } from "../@types/types";

const categories= [
  {
    name: 'furniture',
    subcategories: [
      {
        name: 'table',
        url: '/table',
        subcategories: []
      },
      {
        name: 'shelf',
        url: '/shelf',
        subcategories: []
      },
      {
        name: 'chair',
        url: '/chair',
        subcategories: []
      },
      {
        name: 'sofa',
        url: '/sofa',
        subcategories: []
      },
      {
        name: 'stand',
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
        name: 'vase',
        url: '/vase',
        subcategories: []
      },
      {
        name: 'pot',
        url: '/pot',
        subcategories: []
      },
      {
        name: 'lamp',
        url: '/lamp',
        subcategories: []
      }
    ],
    image: 'https://static.tildacdn.com/tild3639-3531-4161-b066-323233633138/10294067644_65ec5f9ef5_o.jpg',
    url: '/accessories'
  }
]

export default categories;