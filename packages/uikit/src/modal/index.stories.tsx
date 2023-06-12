import { useState } from "react"
import { Modal, ModalProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<ModalProps> = {
  title: "Modal",
  component: Modal,
}

export default meta

const Template = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  )
}

export const Default: StoryFn<ModalProps> = Template.bind({})
Default.args = {
  closeOnClickOutside: true,
}
