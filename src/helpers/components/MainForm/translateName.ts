import { InputNames } from "ts/FormInput/FormInput_enum"
import { FormState } from "final-form"
import { FormValues } from "ts/Form/Form_interfaces"

export const translateNameToState = (name: InputNames) => {
  switch (name) {
    case InputNames.COORDINATOR_ID:
      return ["coordinator", "id"]
    case InputNames.COORDINATOR_EMAIL:
      return ["coordinator", "email"]
    default:
      return [name]
  }
}

export const getStateFromTranslatedName = (
  translatedName: string[],
  values: any
) => {
  return translatedName.reduce((prev, curr) => {
    if (prev) {
      return prev[curr]
    }
    return
  }, values)
}
