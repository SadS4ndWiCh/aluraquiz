export default {
  // Pega as questões passando uma URL
  async getQuestions(url) {
    const data = await fetch(url)
      .then(res => res.json())
      .catch(() => {
        console.log('[Get Questions] Falha ao fazer requisição');
      });

    if(!data) {
      return { questions: [] }
    }

    return {
      questions: data.questions
    }
  },

  // Dependendo poderia adicionar outros serviços para pegar outras informações e talz..
}