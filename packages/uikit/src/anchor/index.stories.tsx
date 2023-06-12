import { Anchor, AnchorProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<AnchorProps> = {
  title: "Anchor",
  component: Anchor,
  args: {
    children: "Link",
  },
}

export default meta

const Template = (args: AnchorProps) => <Anchor {...args} />

export const Default: StoryFn = Template.bind({})
Default.args = {
  underline: false,
}

export const Underline: StoryFn = Template.bind({})
Underline.args = {
  underline: true,
}
