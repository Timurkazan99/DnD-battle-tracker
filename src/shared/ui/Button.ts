import styled from 'styled-components'
import { Button as AntdButton } from 'antd'
import { ColorMap } from '../utils/ColorMap.ts'

export const Button = styled(AntdButton)`
    background: none;
    color: ${ColorMap.text};
    border-color: ${ColorMap.text};
    font-family: "Comfortaa", sans-serif;

    &.ant-btn-disabled {
        color: ${ColorMap.text};
        cursor: default;
    }

    &:not(.ant-btn-disabled):hover {
        background: ${ColorMap.active}!important;
        color: ${ColorMap.primary}!important;
        border-color: ${ColorMap.text}!important;
    }
`