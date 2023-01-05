import styled from "styled-components";
import Button from "components/atoms/Button/Button";

export const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: grid;
  justify-items: start;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, 6);
  grid-template-areas: "input1" "input2" "input3" "input4" "textarea" "button";
  gap: 15px;

  margin-top: 20px;

  @media (min-width: 576px) {
    margin-top: 30px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    padding: 30px;
    margin-top: 40px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas: 
    "input1 textarea" 
    "input2 textarea" 
    "input3 textarea" 
    "input4 textarea" 
    "null button";
    margin-top: 50px;
  }
`;

export const SubmitButton = styled(Button)`
justify-self: end;
grid-area: button;
`;