import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  resize: none;
  font-family: unset;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize[100]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
  }
`;

export default Textarea;