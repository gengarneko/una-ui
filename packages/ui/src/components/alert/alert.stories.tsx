import { ExclamationTriangleIcon, RocketIcon } from '@radix-ui/react-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { Alert, AlertDescription, AlertTitle } from './'

const meta: Meta<typeof Alert> = {
  component: Alert,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: {
        type: 'select',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <RocketIcon className='size-4' />
      <AlertTitle>提示</AlertTitle>
      <AlertDescription>你可以使用 cli 添加组件和依赖。</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <ExclamationTriangleIcon className='size-4' />
      <AlertTitle>错误</AlertTitle>
      <AlertDescription>你的会话已过期。请重新登录。</AlertDescription>
    </Alert>
  ),
}
