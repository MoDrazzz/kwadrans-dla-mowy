import styled from "styled-components";

export const ContactDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
  "icon description"
  "icon value";
  grid-column-gap: 15px;
  grid-row-gap: 2px;
  justify-items: start;
  align-items: center;
  height: min-content;

  @media (min-width: 576px) {
    grid-template-columns: 30px 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 35px 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 40px 1fr;
    grid-column-gap: 25px;
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 45px 1fr;
  }
`;