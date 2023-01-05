import styled from "styled-components";

export const AlertsWrapper = styled.div`
  transform: ${({ visible }) => visible ? "translateX(0)" : "translateX(calc(80vw + 20px))"};
  
  position: fixed;
  z-index: 2;
  bottom: 20px;
  right: 20px;
  
  transition: transform .2s ease-in-out;
  
  @media (min-width: 768px) {
    transform: ${({ visible }) => visible ? "translateX(0)" : "translateX(calc(60vw + 20px))"};
  }
  
  @media (min-width: 1200px) {
    transform: ${({ visible }) => visible ? "translateX(0)" : "translateX(calc(50vw + 20px))"};
  }
`;