import styled from 'styled-components';
import db from '../../db.json';

export const Title = styled.h1`
  color: ${(props) => props.color};

  font-size: 23px;
`;

export const Text = styled.p`
  color: ${(props) => props.color};

  font-weight: 400;
  font-size: 17px;
`;