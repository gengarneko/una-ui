import { type Meta, type StoryObj } from '@storybook/react'

import { Label } from '@/components/label'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    id: 'switch',
  },
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: (args) => (
    <div className='flex items-center space-x-2'>
      <Switch {...args} />
      <Label htmlFor='airplane-mode'>飞行模式</Label>
    </div>
  ),
}
