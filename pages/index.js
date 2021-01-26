import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer';
import GithubCorner from '../src/components/githubCorner';

export default function Home() {
  return (
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
  )
}
