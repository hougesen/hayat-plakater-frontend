export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address

    if (process.env.NODE_ENV === 'production') {
      return `https://hayat-plakater-backend-gequk.ondigitalocean.app${url}`;
    }

    return `http://localhost:1337${url}`;
  }
  // Otherwise return full URL
  return url;
}
