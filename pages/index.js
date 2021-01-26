import Head from 'next/head';
import db from '../db.json';

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

        <meta name="title" content="Aluraquiz - SadS4ndWiCh" />
        <meta
          name="description"
          content="Projeto Aluraquiz da Imersão React da Alura criado em NextJS"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://aluraquiz.sads4ndwich.vercel.app/"
        />
        <meta property="og:title" content="Aluraquiz - SadS4ndWiCh" />
        <meta
          property="og:description"
          content="Projeto Aluraquiz da Imersão React da Alura criado em NextJS"
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/**Alura%20Quiz**%20-%20SadSAndWiCh.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://aluraquiz.sads4ndwich.vercel.app/"
        />
        <meta property="twitter:title" content="Aluraquiz - SadS4ndWiCh" />
        <meta
          property="twitter:description"
          content="Projeto Aluraquiz da Imersão React da Alura criado em NextJS"
        />
        <meta
          property="twitter:image"
          content="https://og-image.vercel.app/**Alura%20Quiz**%20-%20SadSAndWiCh.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
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

        <GithubCorner projectUrl="https://github.com/SadS4ndWiCh/aluraquiz" />
      </QuizBackground>
    </>
  );
}
