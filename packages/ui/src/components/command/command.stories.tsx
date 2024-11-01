import { useEffect, useState } from 'react'

import type { ComponentProps } from 'react'

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '.'

const meta: Meta<typeof Command> = {
  component: Command,
  render: (args) => (
    <div className='mx-auto max-w-md pt-6'>
      <Command {...args} className='rounded-lg border shadow-md'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>没有找到结果。</CommandEmpty>
          <CommandGroup heading='建议'>
            <CommandItem>日历</CommandItem>
            <CommandItem>搜索表情符号</CommandItem>
            <CommandItem>计算器</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='设置'>
            <CommandItem>个人资料</CommandItem>
            <CommandItem>账单</CommandItem>
            <CommandItem>设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Command>

export const Default: Story = {}

const DialogExample = (props: ComponentProps<typeof CommandDialog>) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => {
      document.removeEventListener('keydown', down)
    }
  }, [])

  return (
    <>
      <p className='text-sm text-muted-foreground'>
        Press{' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </p>
      <CommandDialog {...props} open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>没有找到结果。</CommandEmpty>
          <CommandGroup heading='建议'>
            <CommandItem>
              <CalendarIcon className='mr-2 size-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className='mr-2 size-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className='mr-2 size-4' />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='设置'>
            <CommandItem>
              <PersonIcon className='mr-2 size-4' />
              <span>个人资料</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className='mr-2 size-4' />
              <span>邮件</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className='mr-2 size-4' />
              <span>设置</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export const Dialog: Story = {
  render: (args) => <DialogExample {...args} />,
}
