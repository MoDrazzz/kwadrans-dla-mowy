import styled from 'styled-components';
import Container from 'components/organisms/Container/Container';

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;