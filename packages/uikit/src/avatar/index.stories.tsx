import { Avatar, AvatarProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<AvatarProps> = {
  title: "Avatar",
  component: Avatar,
}

export default meta

const Template = (args: AvatarProps) => <Avatar {...args} />

export const Image: StoryFn = Template.bind({})
Image.args = {
  src: "https://fakeimg.pl/300/",
}

export const Name: StoryFn = Template.bind({})
Name.args = {
  name: "Semyon Zasov",
}
