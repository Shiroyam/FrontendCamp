import { Input, InputProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<InputProps> = {
  title: "Input",
  component: Input,
  argTypes: {
    onClick: { action: "clicked" },
    variant: { control: { options: ["outline", "filled"] } },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
}

export default meta

const Template = (args: InputProps) => <Input {...args} />

export const Filled: StoryFn = Template.bind({})
Filled.args = {
  variant: "filled",
}

export const Outline: StoryFn = Template.bind({})
Outline.args = {
  variant: "outline",
}

export const Error: StoryFn = Template.bind({})
Error.args = {
  variant: "filled",
  placeholder: "Enter your name",
  error: true,
  errorText: "Name is required",
}
