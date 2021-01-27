import styled from 'styled-components';

const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export default function Form({ children, handleSubmit, ...props }) {
  return (
    <FormBase
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
    >
      { children }
    </FormBase>
  )
}