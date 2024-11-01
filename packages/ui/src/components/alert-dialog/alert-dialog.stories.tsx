import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '../button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './'

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>打开</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>你确定吗？</AlertDialogTitle>
          <AlertDialogDescription>
            此操作无法撤消。这将永久删除您的帐户并从我们的服务器中删除您的数据。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>继续</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export default meta

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {}
