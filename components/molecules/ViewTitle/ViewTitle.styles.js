import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
  text-align: ${({ align }) => align ? align : 'left'};
`;

export const Section = styled(Paragraph)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 0.8;
`;