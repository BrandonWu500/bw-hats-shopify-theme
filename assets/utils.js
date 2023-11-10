function formatPrice(amount, currencyCode = 'USD') {
  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol',
  }).format(parseFloat(amount / 100));

  return formattedPrice;
}
