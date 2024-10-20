import { FC } from 'react'
import { Form, Space } from 'antd'
import { throwService } from '../../entities/throw/throwService.ts'
import { Input } from '../../shared/ui'
import { Select } from '../../shared/ui/Select.ts'
import { TypeThrow } from '../../entities/throw/type.ts'

interface FormState {
  type: TypeThrow
  request: string
}

const options = [{ value: 'advantage', label: 'Преимущество' }, { value: 'common', label: 'Обычный' }, { value: 'disadvantage', label: 'Помеха' }]

export const DiceButtons: FC = () => {
  const [form] = Form.useForm<FormState>();
  const submitHandler = (values: FormState) => {
    throwService.throwDice(values.request, values.type)
  }

  return (
    <Form
      style={{
        width: '100%',
        height: 'fit-content'
      }}
      form={form}
      initialValues={{
        type: 'common',
      }}
      onFinish={submitHandler}
    >
      <Space.Compact style={{ width: '100%', height: '32px' }} >
        <Form.Item style={{ width: '100px' }} name="type">
          <Select options={options} />
        </Form.Item>
        <Form.Item
          style={{
            marginRight: '-1px',
            flex: 1
          }}
          name="request">
          <Input />
        </Form.Item>
        <Form.Item>
          <Input type="submit" value={'>>'} />
        </Form.Item>
      </Space.Compact>
    </Form>
  )
}