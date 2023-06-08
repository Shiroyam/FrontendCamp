import { describe, test, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Select, SelectProps } from "./ui"

describe("Select component", () => {
  const props: SelectProps = {
    placeholder: "Placeholder text",
  }

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ]

  test("renders select with placeholder", () => {
    render(
      <Select {...props}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    )

    const placeholderOption = screen.getByText(props.placeholder)
    expect(placeholderOption).toBeInTheDocument()
  })

  test("clicking select opens dropdown", () => {
    const selectId = "selectId"

    render(
      <Select data-testid={selectId} {...props}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    )

    const selectElement = screen.getByTestId(selectId)

    fireEvent.click(selectElement)

    const optionElements = screen.getAllByRole("option")
    expect(optionElements.length).toBe(options.length)
  })
})
