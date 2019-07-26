import {
  required,
  checkLength,
  checkDate,
  allRequired,
  validateEmail,
  notRequiredNumber
} from "./formValidators"
import { FieldValidator } from "final-form"
import { InputNames } from "ts/FormInput/FormInput_enum"
import { FormValues } from "ts/Form/Form_interfaces"

// TODO: add values types
export const assignValidators = (
  name: InputNames,
  values: FormValues
): FieldValidator<any>[] => {
  const validators: FieldValidator<any>[] = []
  switch (name) {
    case InputNames.TITLE:
      validators.push(required as never)
      break
    case InputNames.DESCRIPTION:
      validators.push(required as never)
      validators.push(checkLength(141) as never)
      break
    case InputNames.DATE:
      validators.push(allRequired as never)
      validators.push(checkDate as never)
      break
    case InputNames.COORDINATOR_ID:
      validators.push(required as never)
      break
    case InputNames.EVENT_FEE:
        validators.push(notRequiredNumber as never)
      if (values.paid_event) {
        validators.push(required as never)
      }
      break
    case InputNames.COORDINATOR_EMAIL:
      values.coordinator &&
        values.coordinator.email &&
        validators.push(validateEmail as never)
      break
    case InputNames.DURATION:
    case InputNames.REWARD:
      validators.push(notRequiredNumber as never)
      break
  }
  return validators
}
