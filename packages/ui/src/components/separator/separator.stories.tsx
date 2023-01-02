import { type Meta, type StoryObj } from '@storybook/react'

import { Separator } from '.'

const meta: Meta<typeof Separator> = {
  component: Separator,
  render: (args) => (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Una UI</h4>
        <p className='text-sm text-muted-foreground'>一个开源的 UI 组件库。</p>
      </div>
      <Separator {...args} className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>博客</div>
        <Separator orientation='vertical' />
        <div>文档</div>
        <Separator orientation='vertical' />
        <div>源码</div>
      </div>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Separator>

export const Default: Story = {}

// Updated at Mon Jan 02 2023 15:13:37 GMT+0800 (China Standard Time)
// Random change for feat(storybook)
