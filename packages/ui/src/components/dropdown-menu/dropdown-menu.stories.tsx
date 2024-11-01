import { useState } from 'react'

import type { ComponentProps } from 'react'

import { type DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '.'
import { Button } from '../button'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>打开</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>我的账户</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            个人资料
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            账单
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            设置
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            快捷键
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>团队</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>邀请用户</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>电子邮件</DropdownMenuItem>
                <DropdownMenuItem>消息</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>更多...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            新团队
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>支持</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          退出
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {}

type Checked = DropdownMenuCheckboxItemProps['checked']

const CheckboxesExample = (props: ComponentProps<typeof DropdownMenu>) => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>打开</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>外观</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar ?? false}
          onCheckedChange={setShowStatusBar}
        >
          状态栏
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar ?? false}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          活动栏
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel ?? false}
          onCheckedChange={setShowPanel}
        >
          面板
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Checkboxes: Story = {
  render: (args) => <CheckboxesExample {...args} />,
}

const RadioGroupExample = (props: ComponentProps<typeof DropdownMenu>) => {
  const [position, setPosition] = useState('bottom')

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>打开</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>面板位置</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='top'>顶部</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>底部</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>右侧</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const RadioGroup: Story = {
  render: (args) => <RadioGroupExample {...args} />,
}
