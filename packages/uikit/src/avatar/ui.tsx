import { ImgHTMLAttributes, DetailedHTMLProps } from "react"
import cn from "classnames"
import styles from "./index.module.scss"
import { Shortname } from "./shortname"

export interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src?: string
  name?: string
}

export const Avatar = ({ name, src, className, ...props }: AvatarProps) => {
  const imgClass = cn(styles.img, className)

  const shortname = Shortname(name)

  return (
    <div className={styles.wrapper}>
      <img className={imgClass} src={src} {...props} />
      {name && !src ? <div className={styles.name}>{shortname}</div> : null}
    </div>
  )
}
