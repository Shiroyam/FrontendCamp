import { Select, SelectProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<SelectProps> = {
  title: "Select",
  component: Select,
  argTypes: {
    onClick: { action: "clicked" },
    placeholder: { control: "Не выбрано" },
  },
  args: {
    placeholder: "Не выбрано",
  },
}

export default meta

const Template = (args: SelectProps) => (
  <Select {...args}>
    <option value="value1">Option 1</option>
    <option value="value2">Option 2</option>
    <option value="value3">Option 3</option>
  </Select>
)

export const Default: StoryFn<SelectProps> = Template.bind({})
Default.args = {
  placeholder: "На выбор",
}
