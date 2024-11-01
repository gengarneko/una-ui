import { type Meta, type StoryObj } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '.'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value='apple'>苹果</SelectItem>
          <SelectItem value='banana'>香蕉</SelectItem>
          <SelectItem value='blueberry'>蓝莓</SelectItem>
          <SelectItem value='grapes'>葡萄</SelectItem>
          <SelectItem value='pineapple'>菠萝</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Scrollable: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a timezone' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>北美</SelectLabel>
          <SelectItem value='est'>东部标准时间 (EST)</SelectItem>
          <SelectItem value='cst'>中部标准时间 (CST)</SelectItem>
          <SelectItem value='mst'>山地标准时间 (MST)</SelectItem>
          <SelectItem value='pst'>太平洋标准时间 (PST)</SelectItem>
          <SelectItem value='akst'>阿拉斯加标准时间 (AKST)</SelectItem>
          <SelectItem value='hst'>夏威夷标准时间 (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>欧洲 & 非洲</SelectLabel>
          <SelectItem value='gmt'>格林尼治标准时间 (GMT)</SelectItem>
          <SelectItem value='cet'>中欧时间 (CET)</SelectItem>
          <SelectItem value='eet'>东欧时间 (EET)</SelectItem>
          <SelectItem value='west'>西欧夏令时间 (WEST)</SelectItem>
          <SelectItem value='cat'>中非时间 (CAT)</SelectItem>
          <SelectItem value='eat'>东非时间 (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>亚洲</SelectLabel>
          <SelectItem value='msk'>莫斯科时间 (MSK)</SelectItem>
          <SelectItem value='ist'>印度标准时间 (IST)</SelectItem>
          <SelectItem value='cst_china'>中国标准时间 (CST)</SelectItem>
          <SelectItem value='jst'>日本标准时间 (JST)</SelectItem>
          <SelectItem value='kst'>韩国标准时间 (KST)</SelectItem>
          <SelectItem value='ist_indonesia'>
            印度尼西亚中部标准时间 (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>澳大利亚 & 太平洋</SelectLabel>
          <SelectItem value='awst'>澳大利亚西部标准时间 (AWST)</SelectItem>
          <SelectItem value='acst'>澳大利亚中部标准时间 (ACST)</SelectItem>
          <SelectItem value='aest'>澳大利亚东部标准时间 (AEST)</SelectItem>
          <SelectItem value='nzst'>新西兰标准时间 (NZST)</SelectItem>
          <SelectItem value='fjt'>斐济时间 (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>南美洲</SelectLabel>
          <SelectItem value='art'>阿根廷时间 (ART)</SelectItem>
          <SelectItem value='bot'>玻利维亚时间 (BOT)</SelectItem>
          <SelectItem value='brt'>巴西利亚时间 (BRT)</SelectItem>
          <SelectItem value='clt'>智利标准时间 (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
