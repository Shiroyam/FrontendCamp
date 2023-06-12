import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

export interface PortalProps {
  children?: React.ReactNode
}

export const Portal = ({ children }: PortalProps) => {
  const portalRoot = useRef(document.createElement("div"))

  useEffect(() => {
    const root = document.getElementById("portal-root")
    root?.appendChild(portalRoot.current)

    const currentNode = portalRoot.current

    return () => {
      root?.removeChild(currentNode)
    }
  }, [])

  return ReactDOM.createPortal(children, portalRoot.current)
}
