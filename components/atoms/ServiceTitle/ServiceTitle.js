import styled from "styled-components";

const ServiceTitle = styled.h4`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: ${({ theme }) => theme.fontSize[300]};

@media (min-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize[400]};
}
@media (min-width: 992px) {
  font-size: ${({ theme }) => theme.fontSize[500]};
}
@media (min-width: 1200px) {
  font-size: ${({ theme }) => theme.fontSize[600]};
}
`;

export default ServiceTitle;