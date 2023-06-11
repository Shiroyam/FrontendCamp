import cn from "classnames"
import styles from "./index.module.scss"
import React from "react"

export interface StepperProps {
  onStepClick: (stepIndex: number) => void
  active: number
  children: React.ReactElement<StepProps>[]
}

export interface StepProps {
  title?: string
  description?: string
}

export const Stepper = ({ onStepClick, active, children }: StepperProps) => {
  return (
    <div className={styles.stepper}>
      {Object.values(children).map((child, index) => {
        const stepClass = cn(styles.step, {
          [styles.active]: index === active,
          [styles.completed]: index < active,
        })
        return (
          <div key={index} className={stepClass} onClick={() => onStepClick(index)}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export const Step = ({ title, description }: StepProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
