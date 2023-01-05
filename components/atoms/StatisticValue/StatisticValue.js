import styled from "styled-components";

const StatisticValue = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[600]};
  font-weight: 600;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[700]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[800]}
  }
`;

export default StatisticValue;