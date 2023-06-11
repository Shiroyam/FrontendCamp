import { Step, Stepper, type StepperProps } from "./ui"
import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"

const meta: Meta<StepperProps> = {
  title: "Stepper",
  component: Stepper,
}

export default meta

const Template = (args: StepperProps) => {
  const [activeStep, setActiveStep] = useState(args.active)

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex)
    args.onStepClick(stepIndex)
  }

  return (
    <Stepper active={activeStep} onStepClick={handleStepClick}>
      {args.children}
    </Stepper>
  )
}

export const Default: StoryFn<StepperProps> = Template.bind({})
Default.args = {
  active: 0,
  onStepClick: (index: number) => {
    index
  },
  children: [<Step />, <Step />, <Step />],
}

export const WithTitleAndDescription: StoryFn<StepperProps> = Template.bind({})
WithTitleAndDescription.args = {
  active: 0,
  onStepClick: (index: number) => {
    index
  },
  children: [<Step title="test" description="test" />, <Step title="test" description="test" />, <Step />],
}
