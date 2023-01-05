import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  display: grid;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    &:has(div:only-child) {
      grid-template-columns: 1fr;
    }
  }
`;