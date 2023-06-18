import { Anchor } from "@cloudcamp/uikit"
import { ReactComponent as FolderSvg } from "./folder.svg"
import styles from "./index.module.scss"
import { Link } from "react-router-dom"

interface FolderLinkProps {
  href: string
  name: string
}

export const FolderLink = ({ href, name }: FolderLinkProps) => {
  return (
    <div className={styles.folder}>
      <FolderSvg className={styles.svg} />
      <Link to={href}>
        <Anchor>{name}</Anchor>
      </Link>
    </div>
  )
}
