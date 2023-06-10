import { Radio, RadioProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<RadioProps> = {
  title: "Radio",
  component: Radio,
  args: {
    name: "storybook",
  },
}

export default meta

const Template = (args: RadioProps) => (
  <>
    <Radio {...args} />
    <Radio {...args} />
  </>
)

export const Default: StoryFn = Template.bind({})
