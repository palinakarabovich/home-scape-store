export const countPriceWithDiscount = (price: number, discount: number) => price/100 * (100 - discount)

export const countPriceWithPromoAndDiscount = (price: number, discount: number) => {
  const fullprice = price/(100-discount) * 100;
  return countPriceWithDiscount(fullprice, (discount + 10));
}