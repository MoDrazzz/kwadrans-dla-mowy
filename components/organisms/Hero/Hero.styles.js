import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 125px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  
  @media (min-width: 768px) {
    padding-top: 8vh;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Subtitle = styled(Paragraph)`
  margin: 30px 0;
  max-width: 90%;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 70%;
  }
  @media (min-height: 920px) and (min-width: 1600px) {
    margin: 30px 0 60px;
  }
`;

export const HeroButton = styled(Button)`
  background-color: ${({ theme, special }) => special ? 'transparent' : theme.colors.white};
  color: ${({ theme, special }) => special ? theme.colors.white : theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.white};
  margin: 0 15px 15px;

  @media (min-width: 768px) {
    margin: ${({ special }) => special ? '0 0 0 25px' : '0'};
  }
`;