import styled from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize[100]};
  font-weight: 600;
  cursor: pointer;

  /* transition: background-color .2s ease-in-out, color .2s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  } */

  @keyframes shake {
    0% {
      transform: translateX(0);
    }

    25% {
      transform: translateX(2px);
    }

    50% {
      transform: translateX(0);
    }

    75% {
      transform: translateX(-2px);
    }

    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation: .5s linear shake;
  }

  @media (min-width: 768px) {
    width: 230px;
    height: 52px;
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 992px) {
    width: 240px;
    height: 55px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    height: 60px;
    font-size: ${({ theme }) => theme.fontSize[300]};
  }
`;

export default Button;