import styled from "styled-components";

const NavigationItems = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767px) {
    transform: ${({ navigationActive }) => navigationActive ? 'translateX(0)' : 'translateX(90vw)'};
    /* height: 150px; */
    position: absolute;
    right: 0;
    top: 110px;
    border-radius: 15px 0 15px 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 15px;
    transition: transform .2s ease-in-out;
  }
`;

export default NavigationItems;