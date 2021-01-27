import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

import Form from '../src/components/Form';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Loading...
      </Widget.Header>

      <Widget.Content>
        Loading...
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt={`Imagem da questão ${questionIndex + 1}`}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <Form
          handleSubmit={onSubmit}
        >
          { question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            return (
              <Widget.Topic
                key={index}
                as='label'
                htmlFor={alternativeId}
              >
                <input id={alternativeId} name={questionId} type='radio'  />
                { alternative }
              </Widget.Topic>
            )
          }) }

          <Widget.Button type='submit'>
            Confimar
          </Widget.Button>
        </Form>
        
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  LOADING: -1,
  QUIZ: 0,
  RESULT: 1,
};

export default function QuizPage(props) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = db.questions[currentQuestionIndex];

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmit() {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if(nextQuestionIndex < totalQuestions) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        { screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />
        ) }

        { screenState === screenStates.LOADING && <LoadingWidget /> }

        { screenState === screenStates.RESULT && <div>Parabéns {`${name}`}, você acertou X questões! </div> }

      </QuizContainer>
    </QuizBackground>
  )
}