import db from '../db.json';

import Head from 'next/head';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer';
import GithubCorner from '../src/components/GithubCorner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aluraquiz - SadS4ndWiCh</title>

        <meta name='title' content='Aluraquiz - SadS4ndWiCh' />
        <meta name='description' content='Projeto Aluraquiz da Imersão React da Alura criado em NextJS' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://aluraquiz.sads4ndwich.vercel.app/' />
        <meta property='og:title' content='Aluraquiz - SadS4ndWiCh' />
        <meta property='og:description' content='Projeto Aluraquiz da Imersão React da Alura criado em NextJS' />
        <meta property='og:image' content='blob:https://vercel.com/da6a9065-29cb-421f-a08d-4fcd58a9ecbe' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://aluraquiz.sads4ndwich.vercel.app/' />
        <meta property='twitter:title' content='Aluraquiz - SadS4ndWiCh' />
        <meta property='twitter:description' content='Projeto Aluraquiz da Imersão React da Alura criado em NextJS' />
        <meta property='twitter:image' content='blob:https://vercel.com/da6a9065-29cb-421f-a08d-4fcd58a9ecbe' />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>

            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>

        <GithubCorner projectUrl='https://github.com/SadS4ndWiCh/aluraquiz' />
      </QuizBackground>
    </>
  )
}
