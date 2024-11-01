import { type Meta, type StoryObj } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  args: {
    type: 'single',
    collapsible: true,
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: {
        type: 'select',
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export default meta

type Story = StoryObj<typeof Accordion>

const items = [
  {
    trigger: '是否可访问？',
    content: '是的。它遵循 WAI-ARIA 设计模式。',
    value: 'item-1',
  },
  {
    trigger: '是否样式化？',
    content: '是的。它带有默认样式，与其它组件的外观相匹配。',
    value: 'item-2',
  },
  {
    trigger: '是否有动画？',
    content: '是的。它是默认动画的，但如果你愿意，可以禁用它。',
    value: 'item-3',
  },
]

export const Single: Story = {}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
}
