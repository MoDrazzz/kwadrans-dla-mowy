import styled from "styled-components";

const Accent = styled.span`
background-color: ${({ theme }) => theme.colors.primary};
width: 50px;
height: 4px;
display: block;

margin: ${({ align }) => align==="center" ? '2px auto 15px' : '2px 0 15px'};

@media (min-width: 768px) {
  width: 55px;
  height: 5px;
}

@media (min-width: 992px) {
  width: 65px;
  height: 5px;
}

@media (min-width: 1200px) {
  width: 80px;
  height: 6px;
}
`;

export default Accent;