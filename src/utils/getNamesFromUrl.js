export default function getNamesFromUrl(url) {
  let urlObj;
  
  try {
    urlObj = new URL(url);
  } catch (err) {
    throw new Error('Invalid URL');
  }

  if(!urlObj.host.endsWith('.vercel.app')) {
    return {
      gitHubUser: null,
      projectName: null,
    }
  }

  urlObj.host.replace('.vercel.app', '');

  const [projectName, gitHubUser] = urlObj.host.split('.');

  return {
    gitHubUser,
    projectName,
  }
}