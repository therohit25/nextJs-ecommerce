export const createURL = ({
  searchTerm,
  category,
  priceRange,
}: {
  searchTerm?: string;
  category?: string;
  priceRange?: string;
}) => {
  const params = new URLSearchParams();

  if (searchTerm) params.append("title", searchTerm);
  if (category) params.append("categoryId", category);

  switch (priceRange) {
    case "low":
      params.append("price_max", "100");
      break;
    case "mid":
      params.append("price_min", "100");
      params.append("price_max", "500");
      break;
    case "high":
      params.append("price_min", "500");
      break;
    default:
      break;
  }

  return `https://api.escuelajs.co/api/v1/products?${params.toString()}`;
};

export const createFilterURL = ({
  searchTerm,
  category,
  priceRange,
}: {
  searchTerm?: string;
  category?: string;
  priceRange?: string;
}) => {
  const params = new URLSearchParams();

  if (searchTerm) params.append("title", searchTerm);
  if (category) params.append("categoryId", category);
  if (priceRange) params.append("priceRange", priceRange);

  return `/products?${params.toString()}`;
};


