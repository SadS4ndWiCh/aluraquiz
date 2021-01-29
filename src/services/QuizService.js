import isValidDBUrl from '../utils/isValidDBUrl';
import adjustUrl from '../utils/adjustUrl';

export default {
  async getQuestions(url, options = {}) {
    const { failReturnDefault, currentHost } = options;
    url = adjustUrl(url);

    const isValid = await isValidDBUrl(url);
    
    if(!isValid) {
      if(failReturnDefault) {
        url = `http://${currentHost}/api/db`;
      } else {
        return null;
      }
    };
    
    const res = await fetch(url);
    const data = await res.json();

    return data.questions;
  }
}