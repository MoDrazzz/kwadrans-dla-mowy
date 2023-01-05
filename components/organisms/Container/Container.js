import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  position: relative;
  background-color: ${({ theme, bg }) => bg === "primary" ? theme.colors.primary : bg==="dimmed" ? theme.colors.dimmedWhite : theme.colors.white};
  
  scroll-margin-top: 110px;

  padding: 15px 15px 30px;
  
  @media (min-width: 576px) {
    padding: 35px;
  }

  @media (min-width: 768px) {
    padding: 115px 35px;
    scroll-margin-top: 20px;
  }

  @media (min-width: 992px) {
    padding: 135px 50px;
  }

  @media (min-width: 1200px) {
    padding: 135px 10vw;
  }
`;

export default Container;