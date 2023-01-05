import styled from "styled-components";

const Title = styled.h2`
color: ${({ theme }) => theme.colors.dark};
font-size: ${({ theme }) => theme.fontSize[400]};

@media (min-width: 576px) {
  font-size: ${({ theme }) => theme.fontSize[500]};
}
@media (min-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize[600]};
}
@media (min-width: 992px) {
  font-size: ${({ theme }) => theme.fontSize[700]};
}
@media (min-width: 1200px) {
  font-size: ${({ theme }) => theme.fontSize[800]};
}
`;

export default Title;