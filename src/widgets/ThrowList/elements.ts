import styled from 'styled-components'
import { ColorMap } from '../../shared/utils/ColorMap.ts'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;    
    justify-content: space-between;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
    background: ${ColorMap.second};
    border-radius: 16px;
`

export const LogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    margin-bottom: 16px;

    &::-webkit-scrollbar {
        display: none;
    }
`