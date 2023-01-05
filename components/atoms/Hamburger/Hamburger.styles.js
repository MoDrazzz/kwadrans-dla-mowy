import styled from "styled-components";

export const HamburgerWrapper = styled.button`
  cursor: pointer;
  width: 34px;
  height: 34px;
  border: 0;
  background-color: transparent;
  position: relative;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const HamburgerInner = styled.span`
  background-color: ${({ headerActive, navigationActive, theme }) => {
    if(navigationActive) {
      return 'transparent';
    } else {
      if(headerActive) {
        return theme.colors.primary;
      } else {
        return theme.colors.white;
      }
    }
  }};
  transition: background-color .2s ease-in-out;
  &, &::before, &::after {
    width: 34px;
    height: 4px;
    border-radius: 5px;
    position: absolute;
    top: calc(50% + 2px);
    left: 0;
  }
  &::before, &::after {
    content: '';
    background-color: ${({ headerActive, theme }) => headerActive ? theme.colors.primary :  theme.colors.white};
    transition: 
      background-color .2s ease-in-out, 
      transform .2s ease-in-out;
  }
  &::before {
    top: -12px;
    transform: ${({ navigationActive }) => navigationActive ? 'translateY(12px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
  }
  &::after {
    top: 12px;
    transform: ${({ navigationActive }) => navigationActive ? 'translateY(-12px) rotate(45deg)' : 'translateY(0) rotate(0)'};
  }
`;