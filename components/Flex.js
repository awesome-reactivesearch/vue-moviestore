import { styled } from '@egoist/vue-emotion'
import { css } from '@emotion/css';

const Flex = styled('div')`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || ''};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
`;

export default Flex;
