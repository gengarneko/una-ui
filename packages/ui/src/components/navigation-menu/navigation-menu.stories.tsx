import * as React from 'react'

import { type Meta, type StoryObj } from '@storybook/react'

import { cn } from '@/utils/cn'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '.'

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description: '一个中断用户并期望响应的重要内容的模态对话框。',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description: '为视力正常的用户预览链接后面的内容。',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description: '显示一个指示器，显示任务完成的进度，通常显示为进度条。',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: '视觉或语义上分离内容。',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description: '一组分层的节内容，一次显示一个。',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description: '一个弹出窗口，当元素接收键盘焦点或鼠标悬停时显示相关信息。',
  },
]

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  render: (args) => (
    <div className='container mx-auto flex justify-center'>
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>开始</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-2 to-gray-4 p-6 no-underline outline-none focus:shadow-md'
                      href='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        shadcn/ui
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        设计精美的组件，使用 Radix UI 和 Tailwind CSS 构建。
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/docs' title='介绍'>
                  可重用的组件，使用 Radix UI 和 Tailwind CSS 构建。
                </ListItem>
                <ListItem href='/docs/installation' title='安装'>
                  如何安装依赖并构建你的应用。
                </ListItem>
                <ListItem href='/docs/components/typography' title='排版'>
                  样式用于标题、段落、列表等。
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>组件</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href='/docs'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                文档
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {}
