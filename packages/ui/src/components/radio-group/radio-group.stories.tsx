import { type Meta, type StoryObj } from '@storybook/react'

import { Label } from '@/components/label'

import { RadioGroup, RadioGroupItem } from '.'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'option-one',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>选项一</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>选项二</Label>
      </div>
    </RadioGroup>
  ),
}
