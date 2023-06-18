import { Avatar } from "@cloudcamp/uikit"
import { FolderLink } from "./folder-link"
import styles from "./index.module.scss"

interface Socials {
  href: string
  name: string
  id: string
}

interface CandidateCardProps {
  name: string
  src?: string
  socials?: Socials[]
}

export const CandidateCard = ({ name, src, socials }: CandidateCardProps) => {
  return (
    <div className={styles.card}>
      <Avatar className={styles.avatar} src={src} name={name} />
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
        {socials?.map(({ href, name, id }) => (
          <FolderLink key={id} href={href} name={name} />
        ))}
      </div>
    </div>
  )
}
