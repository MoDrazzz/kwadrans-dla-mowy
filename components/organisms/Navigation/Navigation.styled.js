import styled from 'styled-components';

export const NavigationContainer = styled.header`
  width: 100vw;
  height: 110px;
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, headerActive }) => headerActive ? theme.colors.white : theme.colors.primary};
  transition: background-color .2s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: ${({ headerActive }) => headerActive ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'};
    opacity: ${({ headerActive }) => headerActive ? '1' : 'none'};
    transition: opacity .2s ease-in-out;
  }
  @media (min-width: 576px) {
    padding: 10px 35px;
  }
  @media (min-width: 992px) {
    height: 125px;
    padding: 10px 50px;
  }
  @media (min-width: 1200px) {
    padding: 10px 10vw;
  }
`;