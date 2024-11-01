import { BellIcon, CheckIcon } from '@radix-ui/react-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'
import { Switch } from '@/components/switch'
import { cn } from '@/utils/cn'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

export const Default: Story = {
  render: (args) => (
    <Card className={cn('w-[380px]', args.className)} {...args}>
      <CardHeader>
        <CardTitle>通知</CardTitle>
        <CardDescription>你有3条未读消息。</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className=' flex items-center space-x-4 rounded-md border p-4'>
          <BellIcon />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium leading-none'>推送通知</p>
            <p className='text-sm text-muted-foreground'>推送通知到设备。</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
            >
              <span className='flex size-2 translate-y-1 rounded-full bg-sky-500' />
              <div className='space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {notification.title}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>
          <CheckIcon className='mr-2 size-4' /> 全部标记为已读
        </Button>
      </CardFooter>
    </Card>
  ),
}
