import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Textarea } from "./ui"

describe("Textarea component", () => {
  const textareaId = "textareaId"
  test("renders without errors", () => {
    render(<Textarea data-testid={textareaId} />)
    const textarea = screen.getByTestId(textareaId) as HTMLInputElement
    expect(textarea).toBeInTheDocument()
  })

  test("renders error message", () => {
    render(<Textarea error={true} errorText="Text is required" />)
    const errorElement = screen.getByText("Text is required")
    expect(errorElement).toBeInTheDocument()
  })
})
