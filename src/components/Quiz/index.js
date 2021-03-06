import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Widget from '../Widget';
import QuizLogo from '../QuizLogo';
import QuizBackground from '../QuizBackground';
import QuizContainer from '../QuizContainer';
import QuestionResult from '../QuestionResult';
import AlternativesForm from '../AlternativesForm';
import CardMessage from '../CardMessage';
import BackLinkArrow from '../BackLinkArrow';

import calculePointsByResults from '../../utils/calculePointsByResults';

function ResultWidget({ username, results }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href='/' />
        Tela de resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          {`${username}, você fez ${calculePointsByResults(results)} pontos!`}
        </p>

        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              <QuestionResult isCorrect={result} questionIndex={index} />
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

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
  addResult
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  function handleSubmitQuestion() {
    setIsQuestionSubmited(true);
    setTimeout(() => {
      addResult(isCorrect);
      setIsQuestionSubmited(false);
      setSelectedAlternative(undefined);
      onSubmit();
    }, 3000);
  }

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href='/' />
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

        <AlternativesForm
          handleSubmit={handleSubmitQuestion}
        >
          { question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeIndex}
                as='label'
                htmlFor={alternativeId}

                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type='radio'
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                />
                { alternative }
              </Widget.Topic>
            )
          }) }

          <Widget.Button type='submit' disabled={!hasAlternativeSelected}>
            Confimar
          </Widget.Button>
          {isQuestionSubmited && isCorrect && <CardMessage cardType='success' message='Você acertou!' />}
          {isQuestionSubmited && !isCorrect && <CardMessage cardType='error' message='Você errou!' />}

        </AlternativesForm>
        
      </Widget.Content>
    </Widget>
  )
}

function QuizNotFound() {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href='/' />
        <h3>Não encontrado</h3>
      </Widget.Header>

      <Widget.Content>
        <CardMessage cardType='error' message='Não foi possível encontrar o quiz' />
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  LOADING: -1,
  QUIZ: 0,
  RESULT: 1,
  NOT_FOUND: 2,
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);

  const totalQuestions = externalQuestions.length;
  const question = externalQuestions[currentQuestionIndex];

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    setTimeout(() => {
      if(!externalQuestions || totalQuestions === 0) {
        setScreenState(screenStates.NOT_FOUND);
        return
      }

      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function addResult(newResult) {
    setResults([
      ...results,
      newResult
    ]);
  }

  function handleSubmitQuiz() {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if(nextQuestionIndex < totalQuestions) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setScreenState(screenStates.RESULT);
    }

  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <QuizLogo />

        { screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        ) }

        { screenState === screenStates.LOADING && <LoadingWidget /> }

        { screenState === screenStates.RESULT && <ResultWidget username={name} results={results} /> }
        
        { screenState === screenStates.NOT_FOUND && <QuizNotFound /> }
      </QuizContainer>
    </QuizBackground>
  )
}