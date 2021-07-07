import { styled } from '@egoist/vue-emotion'
import { Button } from 'ant-design-vue';

export const CustomButton = styled(Button)`
    background-color: ${props => props.background || 'red'};
    color: ${props => props.color || 'white'};
    font-size: 16px;
`;
