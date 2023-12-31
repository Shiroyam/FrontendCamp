import React from "react"
import type { Preview } from "@storybook/react"
import "../src/styles/index.scss"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <div id="portal-root" />
      <Story />
    </>
  ),
]

export default preview
