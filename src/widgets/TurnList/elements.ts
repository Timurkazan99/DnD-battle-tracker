import styled from 'styled-components'
import { Space } from 'antd'
import { ColorMap } from '../../shared/utils/ColorMap.ts'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 20vw;
    height: 100%;
    box-sizing: border-box;
    background: ${ColorMap.second};
    border-radius: 16px;
`

export const ItemWrapper = styled<{ active: boolean }>(Space.Compact)`
    border-radius: 6px;
    width: 100%;
    background: ${({ active }) => active ? ColorMap.accent : ColorMap.primary };
`

export const ScrollList = styled.div`
    padding: 0 16px 16px 16px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display: none;
    }
`