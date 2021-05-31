import axios from 'axios';

// http://localhost:1337/products

export default async () => {
  const baseUrl = process.env.API_URL || 'http://localhost:1337/';

  const routes = ['/', '/plakater', '/about', '/checkout', '/history'];

  const products = await axios
    .get(`${baseUrl}products`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  for (const product of products) {
    routes.push(`/produkt/${product.slug}`);
  }

  /* Currently not implemented (in a good way)
  const categories = await axios
    .get(`${baseUrl}categories`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  for (const category of categories) {
    routes.push(`/kategori/${category.slug}`);
  } */

  return routes;
};
