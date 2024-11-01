import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'

import { Popover, PopoverContent, PopoverTrigger } from '.'

const meta: Meta<typeof PopoverContent> = {
  component: PopoverContent,
  args: {
    children: '放置弹出窗口的内容。',
  },
  argTypes: {
    asChild: {
      control: { disable: true },
    },
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>打开</Button>
      </PopoverTrigger>
      <PopoverContent {...args} />
    </Popover>
  ),
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {}

export const Example: Story = {
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>打开弹出窗口</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80' {...args}>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>尺寸</h4>
            <p className='text-sm text-muted-foreground'>设置层的尺寸。</p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>宽度</Label>
              <Input
                id='width'
                defaultValue='100%'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>最大宽度</Label>
              <Input
                id='maxWidth'
                defaultValue='300px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>高度</Label>
              <Input
                id='height'
                defaultValue='25px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>最大高度</Label>
              <Input
                id='maxHeight'
                defaultValue='none'
                className='col-span-2 h-8'
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
