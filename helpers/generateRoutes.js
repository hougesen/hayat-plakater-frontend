import axios from 'axios';

// http://localhost:1337/products

export default async () => {
  let baseUrl = process.env.API_URL || 'http://localhost:1337';

  let routes = ['/'];

  let products = await axios
    .get(`${baseUrl}/products`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  for (const product of products) {
    routes.push(`/products/${product.slug}`);
  }

  let categories = await axios
    .get(`${baseUrl}/categories`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  for (const category of categories) {
    routes.push(`/categories/${category.slug}`);
  }

  return routes;
};
