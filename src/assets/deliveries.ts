import { IDelivery } from "../@types/types";

export const deliveries: Array<IDelivery>= [
  {
    name: 'Standart delivery',
    duration: '10-15 workdays',
    price: 0
  },
  {
    name: 'Express delivery',
    duration: '5-7 workdays',
    price: 20
  },
  {
    name: 'Next-day',
    duration: '1-2 workdays(depending on time you made your order)',
    price: 50
  },
]