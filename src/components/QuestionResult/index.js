import styled from 'styled-components';

import formatResultNumber from '../../utils/formatResultNumber';

const QuestionResultBase = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 30px;

  margin-bottom: 10px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  box-shadow: ${({ theme }) => theme.shadow};
`;

const QuestionIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  min-width: 70px;
  height: 100%;

  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const QuestionResultStatus = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 12px;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.contrastText};
`;

export default function QuestionResult({ isCorrect, questionIndex }) {
  return (
    <QuestionResultBase>
      <QuestionIndex>#{formatResultNumber(questionIndex+1)}</QuestionIndex>
      <QuestionResultStatus>{isCorrect ? 'Acertou' : 'Errou'}</QuestionResultStatus>
    </QuestionResultBase>
  )
}