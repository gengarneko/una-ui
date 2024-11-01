import { type Meta, type StoryObj } from '@storybook/react'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '.'

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新标签 <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>新窗口</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>分享</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>打印</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export default meta

type Story = StoryObj<typeof Menubar>

export const Default: Story = {}
