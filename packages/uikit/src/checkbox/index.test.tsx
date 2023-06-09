import { describe, test, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { Checkbox } from "./ui"

describe("Checkbox component", () => {
  test("Checkbox changes value when clicked", () => {
    const checkboxId = "checkboxId"

    render(<Checkbox data-testid={checkboxId} />)

    const checkbox = screen.getByTestId(checkboxId) as HTMLInputElement

    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })
})
