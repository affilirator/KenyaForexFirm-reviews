const apiUrl =
  'https://fx.mahinge.com/api/review-criteria/68c8cbd97ad42da58a6fb119?depth=2&draft=false&locale=undefined&trash=false';

export async function getSafetyRegulation() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
