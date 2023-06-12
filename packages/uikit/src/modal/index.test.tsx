import { describe, test, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen } from "@testing-library/react"
import { Modal } from "./ui"
import { Portal } from "./portal"

describe("Modal component", () => {
  beforeEach(() => {
    const portalRoot = document.createElement("div")
    portalRoot.setAttribute("id", "portal-root")
    document.body.appendChild(portalRoot)
  })

  afterEach(() => {
    const portalRoot = document.getElementById("portal-root")
    if (portalRoot) {
      document.body.removeChild(portalRoot)
    }
  })

  test("renders children in a portal", () => {
    render(
      <div>
        <div>Parent content</div>
        <Portal>
          <div data-testid="portal-child">Portal content</div>
        </Portal>
      </div>
    )

    const portalChild = screen.getByTestId("portal-child")
    expect(portalChild).toBeInTheDocument()
  })

  test("renders when isOpen is true", () => {
    const handleClick = vi.fn()

    render(
      <Modal isOpen={true} onClose={handleClick}>
        Modal content
      </Modal>
    )

    const modalElement = screen.getByRole("alertdialog")
    expect(modalElement).toBeInTheDocument()
  })

  test("does not render when isOpen is false", () => {
    const handleClick = vi.fn()

    render(
      <Modal isOpen={false} onClose={handleClick}>
        Modal content
      </Modal>
    )

    const modalElement = screen.queryByRole("alertdialog")
    expect(modalElement).not.toBeInTheDocument()
  })
})
