import { Checkbox, CheckboxProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<CheckboxProps> = {
  title: "Checkbox",
  component: Checkbox,
}

export default meta

const Template = (args: CheckboxProps) => <Checkbox {...args} />

export const Default: StoryFn = Template.bind({})
