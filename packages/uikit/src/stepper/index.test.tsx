import { describe, test, expect, vi } from "vitest"
import { fireEvent, render } from "@testing-library/react"
import { Step, Stepper } from "./ui"
import styles from "./index.module.scss"

describe("Stepper", () => {
  test("Stepper renders correctly", () => {
    const { container } = render(
      <Stepper active={0} onStepClick={vi.fn()}>
        <Step />
        <Step />
        <Step />
      </Stepper>
    )

    const steps = container.querySelectorAll(`.${styles.step}`)

    expect(steps.length).toBe(3)
    expect(steps[0].classList.contains(styles.active)).toBe(true)
    expect(steps[1].classList.contains(styles.active)).toBe(false)
    expect(steps[2].classList.contains(styles.active)).toBe(false)
  })

  test("Stepper changes active step on click", () => {
    const onStepClick = vi.fn()

    const { container } = render(
      <Stepper active={1} onStepClick={onStepClick}>
        <Step />
        <Step />
        <Step />
      </Stepper>
    )

    const steps = container.querySelectorAll(`.${styles.step}`)

    expect(steps[0].classList.contains(styles.active)).toBe(false)
    expect(steps[1].classList.contains(styles.active)).toBe(true)
    expect(steps[2].classList.contains(styles.active)).toBe(false)

    fireEvent.click(steps[1])
    expect(onStepClick).toHaveBeenCalledTimes(1)
    expect(onStepClick).toHaveBeenCalledWith(1)
  })
})
