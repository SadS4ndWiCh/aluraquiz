import db from '../../db.json';
import Quiz from '../../src/components/Quiz';

export default function QuizPage({ questions }) {
  return (
    <Quiz externalQuestions={questions} externalBg={db.bg} />
  )
}

export async function getServerSideProps(ctx) {
  const { name } = ctx.query;

  // Retona o usuário para a página principal caso tente fazer o quiz sem passar um nome
  if(!name) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      questions: db.questions
    }
  }
}