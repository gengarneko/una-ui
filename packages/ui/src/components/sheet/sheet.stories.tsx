import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '.'

const meta: Meta<typeof SheetContent> = {
  component: SheetContent,
  args: {
    side: 'right',
  },
  argTypes: {
    side: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof SheetContent>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>打开</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>编辑资料</SheetTitle>
          <SheetDescription>
            在这里更改您的资料。点击保存以完成。
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              姓名
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              用户名
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>保存更改</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
