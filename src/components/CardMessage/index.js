import styled from 'styled-components';
import db from '../../../db.json';

const CardMessageBase = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 35px;

  padding: 10px 12px;
  margin-top: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const cardTypes = {
  default: {
    bgColor: '#f2f2f2',
    color: 'white',
  },

  success: {
    bgColor: db.theme.colors.success,
    color: 'white',
  },

  error: {
    bgColor: db.theme.colors.wrong,
    color: 'white',
  }
}

export default function CardMessage({ cardType, message }) {
  return (
    <CardMessageBase {...cardTypes[cardType || 'default']}>
      { message }
    </CardMessageBase>
  )
}