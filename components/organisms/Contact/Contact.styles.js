import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "map content";
    align-items: center;
    justify-items: center;
    margin-top: 30px;
  }
`;