import styled from 'styled-components'
import { Input as AntdInput } from 'antd'
import { ColorMap } from '../utils/ColorMap.ts'

export const Input = styled(AntdInput)`
    background: none;
    color: ${ColorMap.text};
    border-color: ${ColorMap.text}!important;
    font-family: "Comfortaa", sans-serif;
    
    &.ant-input-disabled {
        color: ${ColorMap.text};
        cursor: default;
    }

    &:focus, &:not(.ant-input-disabled):hover, &:not(.ant-input-disabled):is(:-webkit-autofill, :autofill) {
        background: ${ColorMap.active}!important;
        color: ${ColorMap.primary}!important;
        border-color: ${ColorMap.text}!important;
    }
    
    
`