import styled from 'styled-components';

const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};

    box-shadow: ${({ theme }) => theme.shadow};

    background-color: ${({ theme }) => theme.colors.mainBg};

    overflow: hidden;

    h1, h2, h3 {
        margin-bottom: 0;
        
        font-size: 16px;
        font-weight: 700;
        
        line-height: 1;
    }

    p {
        font-size: 14px;
        font-weight: 400;

        line-height: 1;
    }
`;

Widget.Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 18px 32px;

    background-color: ${({ theme }) => theme.colors.primary};

    * {
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px;
    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }

    ul {
        list-style: none;

        padding: 0;
    }
`;

Widget.Input = styled.input`
  width: 100%;

  padding: 10px 12px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  background: transparent;
  
  color: ${({ theme }) => theme.colors.inputText};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
    opacity: .8;
  }
`;

Widget.Button = styled.button`
  width: 100%;
  height: 30px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  
  letter-spacing: ${(props) => props.letter || 'initial'};
  text-transform: ${(props) => props.upper || 'initial'};

  background-color: ${(props) => props.bg || props.theme.colors.primary};
  color: ${(props) => props.color || 'white'};

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  cursor: pointer;
`;

Widget.Select = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 25px;

  margin-top: 5px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  text-decoration: none;
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${(props) => props.color || 'white'};

  cursor: ${(props) => props.disabled ? '' : 'pointer'};
  transition: opacity .2s;

  &:hover {
    opacity: .6;
  }
`;

Widget.Topic = styled.a`
  display: block;

  width: 100%;

  margin-bottom: 5px;
  padding: 10px 15px;

  border-radius: ${({ theme }) => theme.borderRadius};

  text-decoration: none;

  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};

  transition: .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
  
  cursor: pointer;

`;

export default Widget;
