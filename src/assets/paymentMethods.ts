import { IPayment } from "../@types/types";

export const payments: Array<IPayment>= [{
  name: 'iDEAL',
  images: ['https://s1.thcdn.com/checkout/resources/images/9ee669b4fde94debc73dbd80ec8c24b1.svg']
},
{
  name: 'Credit Card',
  images: ['https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg', 'https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg']
},
{
  name: 'PayPal',
  images: ['https://s1.thcdn.com/checkout/resources/images/6528547f8322e9cf64458725f0a72827.svg']
},
]