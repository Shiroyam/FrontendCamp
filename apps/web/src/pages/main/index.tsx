import { RegistrationForm } from "features/registration"
import { CandidateCard } from "entities/candidate"
import styles from "./index.module.scss"

const mockCandidate = {
  name: "Semyon Zasov",
  src: undefined,
  socials: [
    { id: "0", name: "Telegram", href: "https://t.me/Shiroyam" },
    { id: "1", name: "GitHub", href: "https://github.com/Shiroyam" },
    { id: "2", name: "Resume", href: "https://disk.yandex.ru/i/b9OeqfzmJkY6Hw" },
  ],
}

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <CandidateCard name={mockCandidate.name} socials={mockCandidate.socials} src={mockCandidate.src} />
      <RegistrationForm />
    </main>
  )
}
