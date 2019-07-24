import { InputNames } from "ts/FormInput/FormInput_enum"

export const assignClassName = (name: InputNames): string => {
  const defaultClassName = "FormInput-input"
  const classNames: string[] = [defaultClassName]
  switch (name) {
    case InputNames.DESCRIPTION:
      classNames.push(defaultClassName + "--textarea")
      break
    case InputNames.CATEGORY_ID:
    case InputNames.COORDINATOR_ID:
      classNames.push(defaultClassName + "--select")
      break
    case InputNames.PAID_EVENT:
      classNames.push(defaultClassName + "--radio")
      break
    case InputNames.DURATION:
    case InputNames.REWARD:
    case InputNames.EVENT_FEE:
      classNames.push(defaultClassName + "--small")
      break
  }
  return classNames.join(" ")
}
