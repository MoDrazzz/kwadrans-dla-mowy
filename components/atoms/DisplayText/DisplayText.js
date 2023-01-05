import styled from "styled-components";

const DisplayText = styled.h1`
  color: ${({ theme, color }) => color === "primary" ? theme.colors.primary : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize[400]};
  font-weight: 600;
  max-width: 500px;

  @media (min-width: 576px) {
    max-width: 600px;
    font-size: ${({ theme }) => theme.fontSize[600]};
  }
  @media (min-width: 768px) {
    max-width: 700px;
    font-size: ${({ theme }) => theme.fontSize[700]};
  }
  @media (min-width: 992px) {
    max-width: 800px;
    font-size: ${({ theme }) => theme.fontSize[800]};
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
    font-size: ${({ theme }) => theme.fontSize[900]};
  }
`;

export default DisplayText;