import styled from "styled-components";

export const AlertWrapper = styled.div`
width: 80vw;
background-color: ${({ theme }) => theme.colors.green};
padding: 20px 20px 20px 20px;
margin-top: 20px;
border-radius: 10px;

p {
  font-weight: 600;
}

@media (min-width: 768px) {
  width: 60vw;
}

@media (min-width: 1200px) {
  width: 50vw;
}
`;