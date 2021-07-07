import { styled } from '@egoist/vue-emotion'
import { Button } from 'ant-design-vue';

export const CustomButton = styled(Button)(props => `
    background-color: ${props.background || 'red'};
    color: ${props.color || 'white'};
    font-size: 16px;
`);
