// Formatting for real
export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency", // Style
    currency: "BRL", // Currency type
    minimumFractionDigits: 2, // Minimum digits
  });

  return formatter.format(price);
};
