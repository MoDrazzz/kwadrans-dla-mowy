import styled from 'styled-components';

const LoadingIndicator = styled.span`
  width: 30px;
  height: 30px;
  border: 5px solid ${({ theme, color }) => color === "primary" ? theme.colors.primary : theme.colors.white};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 992px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 1200px) {
    width: 38px;
    height: 38px;
  }
`;

export default LoadingIndicator;