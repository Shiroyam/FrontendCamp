import { describe, test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Button } from "./ui"
import styles from "./index.module.scss"

describe("Button component", () => {
  test("renders correctly with default props", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(styles.button, styles.filled)
    expect(button).toHaveTextContent("Click me")
  })

  test("renders correctly with outline variant", () => {
    render(<Button variant="outline">Click me</Button>)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(styles.button, styles.outline)
    expect(button).toHaveTextContent("Click me")
  })

  test("renders correctly with disabled prop", () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole("button")

    button.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
