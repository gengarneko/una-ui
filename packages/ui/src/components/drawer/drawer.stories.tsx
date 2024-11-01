import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '.'

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>打开</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>你确定吗？</DrawerTitle>
          <DrawerDescription>此操作无法撤消。</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>提交</Button>
          <DrawerClose asChild>
            <Button variant='outline'>取消</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {}
