import { Button, ButtonProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: { control: { options: ["outline", "filled"] } },
    children: { control: "text" },
  },
  args: {
    children: "Click me!",
  },
}

export default meta

const Template = (args: ButtonProps) => <Button {...args} />

export const Filled: StoryFn = Template.bind({})
Filled.args = {
  variant: "filled",
}

export const Outline: StoryFn = Template.bind({})
Outline.args = {
  variant: "outline",
}
