import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  
  padding: 15px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-size: 14px;
  
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};

  outline: none;
`;

export default Input;