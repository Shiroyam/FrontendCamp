import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Avatar } from "./ui"

describe("Avatar component", () => {
  const mockImg = "https://fakeimg.pl/300/"

  test("renders image if src is provided", () => {
    render(<Avatar src={mockImg} />)

    const img = screen.getByRole("img")
    expect(img).toBeDefined()
  })

  test("renders shortname if name is provided but no src", () => {
    render(<Avatar name="Semyon Zasov" />)

    const shortName = screen.getByText("SZ")
    expect(shortName).toBeDefined()
  })
})
