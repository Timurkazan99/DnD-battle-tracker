import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'
import { ColorMap } from '../utils/ColorMap.ts'

export const Select = styled(AntdSelect)`
    .ant-select-selector {
        background: none!important;
        color: ${ColorMap.text}!important;
        border-color: ${ColorMap.text}!important;
        font-family: "Comfortaa", sans-serif!important;
    }
    
    .ant-select-arrow {
        color: ${ColorMap.text}!important;
    }

    .ant-select-selection {
        background: red;
    }
`