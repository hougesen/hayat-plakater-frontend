import axios from 'axios';

// O(n²) btw fam
export default async () => {
  const baseUrl = process.env.API_URL || 'http://localhost:1337/';

  const routes = ['/', '/plakater', '/about', '/checkout'];

  const types = [
    {
      apiName: 'products',
      pageDir: 'produkt',
    },
  ];

  for (const type of types) {
    await axios
      .get(`${baseUrl}${type.apiName}`)
      .then((res) => res.data)
      .then((result) => {
        for (const elm of result) {
          routes.push(`/${type.pageDir}/${elm.slug}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return routes;
};
