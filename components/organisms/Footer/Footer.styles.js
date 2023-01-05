import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 15px;
  @media (min-width: 576px) {
    padding: 35px;
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1200px) {
    
    padding-right: 10vw÷;
    padding-left: 10vw;
  }
`;