import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Input, InputProps } from "./ui"

describe("Input component", () => {
  const props: InputProps = {
    placeholder: "Enter your name",
  }

  test("renders input with placeholder", () => {
    render(<Input {...props} />)
    const inputElement = screen.getByPlaceholderText("Enter your name")
    expect(inputElement).toBeInTheDocument()
  })

  test("renders error message", () => {
    render(<Input {...props} error={true} errorText="Name is required" />)
    const errorElement = screen.getByText("Name is required")
    expect(errorElement).toBeInTheDocument()
  })
})
