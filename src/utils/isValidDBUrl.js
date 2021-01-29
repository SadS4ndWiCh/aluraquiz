import adjustUrl from './adjustUrl';

export default async function isValidDBUrl(url) {
  if(!url) return false

  try {
    const response = await fetch(url);
    
    if(response.status >= 200 && response.status < 300) {
      const data = await response.json();

      return data.questions !== undefined;
    }
    
    console.error('[isValidDBUrl] Status da requisição é inválido');
    return false;
  } catch (err) {
    console.error('[isValidDBUrl] Erro no momento da requesição.');
    console.error(err);

    return false;
  }
}