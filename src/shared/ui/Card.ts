import { Card as AntdCard } from 'antd'
import styled from 'styled-components'
import { ColorMap } from '../utils/ColorMap.ts'

export const Card = styled<{ active: boolean }>(AntdCard)`
    background: ${({ active }) => active ? ColorMap.accent : ColorMap.second};
    height: fit-content;
    
    .ant-card-head-title {
        font-family: "Comfortaa", sans-serif;
        color: ${ColorMap.text};
    }
`