import { InputNames } from "ts/FormInput/FormInput_enum"
import {
  translateNameToState,
  getStateFromTranslatedName
} from "./translateName"

export const assignClassName = (name: InputNames, values?: any, meta?: any): string => {
  const defaultClassName = "FormInput-input"
  const classNames: string[] = [defaultClassName]
  meta && meta.error && meta.touched && classNames.push(defaultClassName + "--error")
  switch (name) {
    case InputNames.DESCRIPTION:
      classNames.push(defaultClassName + "--textarea")
      break
    case InputNames.CATEGORY_ID:
    case InputNames.COORDINATOR_ID:
      const translatedName = translateNameToState(name)
      const valueFromTranslatedName = getStateFromTranslatedName(
        translatedName,
        values
      )

      classNames.push(defaultClassName + "--select")

      if (values && !valueFromTranslatedName) {
        classNames.push(defaultClassName + "--placeholder")
      }
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
