import { type Meta, type StoryObj } from '@storybook/react'

import { Anchor, ArrowPosition } from './anchor'

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  args: {
    href: 'https://example.com',
    children: '示例链接',
  },
  argTypes: {
    arrow: {
      options: ['left', 'right', undefined],
      control: {
        type: 'select',
      },
    },
    underline: {
      control: 'boolean',
    },
    favicon: {
      control: 'boolean',
    },
    discreet: {
      control: 'boolean',
    },
  },
  render: (args: any) => (
    <div className='flex flex-col gap-4'>
      {items.map((item) => {
        const { arrow, underline, ...rest } = item
        return (
          <Anchor
            key={item.id}
            arrow={arrow as ArrowPosition}
            underline={underline as boolean}
            {...args}
            {...rest}
          >
            {item.children}
          </Anchor>
        )
      })}
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Anchor>

const items = [
  {
    id: '1',
    children: '基础链接示例',
    href: 'https://github.com',
  },
  {
    id: '2',
    children: '带右箭头的链接',
    href: 'https://github.com',
    arrow: 'right',
  },
  {
    id: '3',
    children: '带下划线的链接',
    href: 'https://github.com',
    underline: true,
  },
  {
    id: '4',
    children: '带网站图标的链接',
    href: 'https://github.com/MaximeHeckel',
    favicon: true,
  },
  {
    id: '5',
    children: '低调样式的链接',
    href: 'https://github.com',
    discreet: true,
  },
]

export const Default: Story = {}

export const WithRightArrow: Story = {
  args: {
    arrow: 'right',
  },
}

export const WithLeftArrow: Story = {
  args: {
    arrow: 'left',
  },
}

export const WithUnderline: Story = {
  args: {
    underline: true,
  },
}

export const WithFavicon: Story = {
  args: {
    favicon: true,
  },
}

export const Discreet: Story = {
  args: {
    discreet: true,
  },
}
