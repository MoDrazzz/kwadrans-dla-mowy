import styled from "styled-components";

const FooterText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSize[100]};
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
  }

  @media ( hover: hover ) {
    @keyframes rainbow { 
      0%{background-position:left}
      50%{background-position:right}
      100%{background-position:left}
    }
    
    span {
      display: inline-block;
      transition: color .5s ease-in-out;
    }

    a:hover > span {
      background: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
      background-size: 200% 200%;
      animation: rainbow 2s ease-in-out infinite;
      background-clip: text;
      -webkit-background-clip:text;
      transition: color .2s ease-in-out;
      color: transparent;
    }
  }
`;

export default FooterText;