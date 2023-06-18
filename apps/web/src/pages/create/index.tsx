import { PersonalInfoForm, AboutForm, AdvantageForm } from "features/questionnaire"
import { Step, Stepper } from "@cloudcamp/uikit"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { stepModel } from "shared/const"
import styles from "./index.module.scss"

export const CreatePage = () => {
  const queryParams = Number(new URLSearchParams(location.search).get("step"))

  const [actionStep, setActionStep] = useState<number>(0 | queryParams)

  const navigate = useNavigate()

  const LAST_STEP = Math.max(...Object.values(stepModel))

  const handleStepChange = (step: number) => {
    if (step === -1) {
      return navigate("/")
    }

    if (LAST_STEP < step) {
      setActionStep(2)
      return navigate({
        pathname: "/create",
        search: `?step=${2}`,
      })
    }

    setActionStep(step)
    return navigate({
      pathname: "/create",
      search: `?step=${step}`,
    })
  }

  return (
    <main className={styles.main}>
      <Stepper active={actionStep} onStepClick={handleStepChange}>
        <Step />
        <Step />
        <Step />
      </Stepper>
      {Content(actionStep, handleStepChange)}
    </main>
  )
}

const Content = (step: number, handleStepChange: (step: number) => void) => {
  switch (step) {
    case stepModel.PERSONAL:
      return <PersonalInfoForm actionStep={step} handleStepChange={handleStepChange} />
    case stepModel.ADVANTAGES:
      return <AdvantageForm actionStep={step} handleStepChange={handleStepChange} />
    case stepModel.ABOUT:
      return <AboutForm actionStep={step} handleStepChange={handleStepChange} />
  }
}
