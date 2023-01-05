import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 4vw;
  }

  @media (min-width: 1200px) {
    gap: 5vw;
  }
`;

export const AboutButton = styled(Button)`
  margin-top: 30px;
  justify-self: start;

  @media (min-width: 992px) {
    margin-top: 50px;
  }
`