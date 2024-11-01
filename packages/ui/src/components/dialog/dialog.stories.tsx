import { CopyIcon } from '@radix-ui/react-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant='outline'>编辑个人资料</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>编辑个人资料</DialogTitle>
          <DialogDescription>
            在这里更改您的个人资料。点击保存完成。
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              姓名
            </Label>
            <Input id='name' value='张三' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              用户名
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>保存更改</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {}

export const CustomCloseButton: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant='outline'>分享</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>分享链接</DialogTitle>
          <DialogDescription>任何人都可以通过此链接查看。</DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              链接
            </Label>
            <Input
              id='link'
              defaultValue='https://ui.shadcn.com/docs/installation'
              readOnly
            />
          </div>
          <Button type='submit' size='sm' className='px-3'>
            <span className='sr-only'>复制</span>
            <CopyIcon className='size-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              关闭
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
