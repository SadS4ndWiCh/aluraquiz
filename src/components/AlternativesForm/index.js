import styled from 'styled-components';

const AlternativesFormBase = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.sucess};
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }

    &:focus {
      opacity: 1;
    }
  }

  button {
    margin-top: 24px;
  }
`;

export default function AlternativesForm({ children, handleSubmit }) {
  return (
    <AlternativesFormBase onSubmit={(e) => {
      e.preventDefault();

      handleSubmit(e);
    }}>
      { children }
    </AlternativesFormBase>
  )
};