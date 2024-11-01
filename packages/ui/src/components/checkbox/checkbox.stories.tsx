import { type Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from '.'
import { Label } from '../label'
import { Typography } from '../typography'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    id: 'checkbox',
    disabled: false,
  },
  argTypes: {
    asChild: {
      control: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <div className='flex items-center space-x-2'>
      <Checkbox {...args} />
      <Label htmlFor={args.id}>接受条款和条件</Label>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const WithText: Story = {
  render: (args) => (
    <div className='flex items-start space-x-2'>
      <Checkbox {...args} />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={args.id}>接受条款和条件</Label>
        <Typography variant='muted'>
          您同意我们的服务条款和隐私政策。
        </Typography>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
