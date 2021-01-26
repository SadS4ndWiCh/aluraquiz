import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 20px;

    border-radius: 4px;

    img {
        width: 58px;
        margin-right: 23px;
    }

    a {
        color: white;
        text-decoration: none;

        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }

        span {
            text-decoration: underline;
        }
    }

    background-color: #00000070;
`;

export default function Footer(props) {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo alura" />
      </a>

      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterWrapper>
  );
}
