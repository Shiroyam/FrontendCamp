import { Textarea, TextareaProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<TextareaProps> = {
  title: "Textarea",
  component: Textarea,
}

export default meta

const Template = (args: TextareaProps) => <Textarea {...args} />

export const Default: StoryFn = Template.bind({})
Default.args = {
  placeholder: "Enter your name",
}

export const DefaultError: StoryFn = Template.bind({})
DefaultError.args = {
  placeholder: "Enter your name",
  error: true,
  errorText: "Name is required",
}
