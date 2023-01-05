import styled from "styled-components";

const Separator = styled.span`
  width: 100%;
  height: 4px;
  margin: 10px 0;
  display: block;
  background-color: ${({ theme }) => theme.colors.dimmedWhite};

  @media (min-width: 992px) {
    margin: 20px 0;
  }
`;

export default Separator;