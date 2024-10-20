import { FC } from 'react'
import { ThrowItem as Props } from '../../entities/throw/type.ts'
import styled from 'styled-components'
import { ColorMap } from '../../shared/utils/ColorMap.ts'
import { Tooltip } from 'antd'

const typeColorMap = {
  success: ColorMap.success,
  fail: ColorMap.fail,
  common: ColorMap.primary
}

const Wrapper = styled.span`
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
    background: ${({ type }) => typeColorMap[type]};
    padding: 4px 11px;
    height: 32px;
    font-size: 20px;
    line-height: 24px;
    color: ${({ type }) => type !== 'success' ? ColorMap.text : ColorMap.primary};
    border-radius: 6px;
`

export const ThrowItem: FC<Props> = ({ value, type, modify, total,  request}) => {
  return (
    <Tooltip
      title={request}
      placement="leftBottom"
    >
      <Wrapper type={type}>
        {value} + {modify} = {total}
      </Wrapper>
    </Tooltip>
  )
}