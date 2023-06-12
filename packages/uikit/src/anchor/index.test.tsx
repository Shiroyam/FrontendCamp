import { describe, test, expect } from "vitest"
import { render } from "@testing-library/react"
import { Anchor } from "./ui"
import styles from "./index.module.scss"

describe("Anchor component", () => {
  test("renders with different props", () => {
    const { getByText } = render(<Anchor href="#">Link</Anchor>)
    const { container } = render(<Anchor href="#" underline={true}></Anchor>)

    expect(getByText("Link")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(`${styles.underline}`)
  })
})
