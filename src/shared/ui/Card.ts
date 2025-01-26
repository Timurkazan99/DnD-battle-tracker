import { Card as AntdCard } from 'antd'
import styled from 'styled-components'
import { ColorMap } from '../utils/ColorMap.ts'
import { Status } from '../../entities/creature/type.ts'

export const Card = styled<{ active: boolean, status: Status }>(AntdCard)`
    background: ${({ active }) => active ? ColorMap.accent : ColorMap.second};
    height: fit-content;
    opacity: ${({ status }) => status === Status.DEAD ? 0.6 : 1};
    
    .ant-card-head-title {
        font-family: "Comfortaa", sans-serif;
        color: ${ColorMap.text};
    }
`