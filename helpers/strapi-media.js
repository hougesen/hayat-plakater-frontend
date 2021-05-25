export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address

    // if (process.env.NODE_ENV === 'production') {
    return 'https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2021/05/fwk-celtic-park.png';
    // }

    // return `${process.env.API_URL ? process.env.API_URL : 'http://localhost:1337'}${url}`;
  }
  // Otherwise return full URL
  return url;
}
