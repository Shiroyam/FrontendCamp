import { describe, test, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { Radio } from "./ui"

describe("Radio component", () => {
  test("Radio changes value when clicked", () => {
    const radioId = "radioId"

    render(<Radio data-testid={radioId} />)

    const radio = screen.getByTestId(radioId) as HTMLInputElement

    expect(radio.checked).toBe(false)

    fireEvent.click(radio)

    expect(radio.checked).toBe(true)
  })
})
