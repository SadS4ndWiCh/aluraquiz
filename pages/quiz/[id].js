import Head from 'next/head';

import db from '../../db.json';
import Quiz from '../../src/components/Quiz';

import QuizService from '../../src/services/QuizService';

export default function DynamicQuizPage({
  questions,
  gitHubUser,
  projectName,
  host,
  ...props
}) {
  const pageTitle = `${projectName} - ${gitHubUser}`;
  console.log(props);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="title" content={pageTitle} />
      </Head>
      
      <Quiz externalQuestions={questions} externalBg={db.bg} />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { name, id } = ctx.query;
  // Retonar o usuário para página principal caso tente fazer o quiz sem passar um nome
  if(!name) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const [projectName, gitHubUser] = id.split('_');
  const quizApiUrl = `https://${projectName}.${gitHubUser}.vercel.app/api/db`;
  const { questions } = await QuizService.getQuestions(quizApiUrl);

  return {
    props: {
      questions,
      gitHubUser,
      projectName,
    }
  }
}