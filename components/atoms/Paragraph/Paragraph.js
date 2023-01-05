import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: ${({ bold }) => bold ? "600" : "400"};
  color: ${({ theme, white, primary }) => white ? theme.colors.white : primary ? theme.colors.primary : theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize[100]};

  text-align: ${({ align }) => align ? align : "left"};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[400]};
  }
`;

export default Paragraph;