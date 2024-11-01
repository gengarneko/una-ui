import { type FC } from 'react'

import type { ToastArgs } from './use-toast'

import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'

import { ToastAction } from './toast'
import { Toaster } from './toaster'
import { useToast } from './use-toast'

const ToastDemo: FC<ToastArgs> = (props) => {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast(props)
      }}
    >
      显示 Toast
    </Button>
  )
}

const meta: Meta<typeof ToastDemo> = {
  component: ToastDemo,
  args: {
    variant: 'default',
    title: '已安排：赶上',
    description: '2023年2月10日星期五下午5:57',
  },
  argTypes: {
    action: { control: { disable: true } },
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <div>
      <ToastDemo {...args} />
      <Toaster />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof ToastDemo>

export const Default: Story = {}

export const Simple: Story = {
  args: {
    title: '',
    description: '您的消息已发送。',
  },
}

export const WithTitle: Story = {
  args: {
    title: '哎呀！出了点问题。',
    description: '您的请求有问题。',
  },
}

export const WithAction: Story = {
  args: {
    title: '哎呀！出了点问题。',
    description: '您的请求有问题。',
    action: <ToastAction altText='Try again'>再试一次</ToastAction>,
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: '哎呀！出了点问题。',
    description: '您的请求有问题。',
    action: <ToastAction altText='Try again'>再试一次</ToastAction>,
  },
}
