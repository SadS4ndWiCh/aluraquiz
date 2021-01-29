export default function adjustUrl(url) {
  if(url.endsWith('/')) {
    url = `${url}api/db`
  } else {
    url = `${url}/api/db`
  }

  return url;
}