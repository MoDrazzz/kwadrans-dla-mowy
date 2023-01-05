import styled from "styled-components";

const Map = styled.iframe`
  border: 0;
  width: 100%;
  height: 80vw;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    grid-area: map;
    height: 45vw;
    max-height: 600px;
    margin-top: 0;
  }
`;

export default Map;