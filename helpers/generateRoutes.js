import axios from 'axios';

// http://localhost:1337/products

export default async () => {
  let routes = ['/'];

  let products = await axios
    .get('http://localhost:1337/products')
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });

  for (const product of products) {
    routes.push(`/products/${product.slug}`);
  }

  let categories = await axios
    .get('http://localhost:1337/categories')
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });

  for (const category of categories) {
    routes.push(`/categories/${category.slug}`);
  }

  return routes;
};
