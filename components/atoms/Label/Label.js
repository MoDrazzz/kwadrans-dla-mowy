import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize[100]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
  }

  span {
    opacity: 60%;
  }
`;

export default Label;