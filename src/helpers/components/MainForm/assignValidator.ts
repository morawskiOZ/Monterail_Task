import { required, checkLength } from "./formValidation"
import { FieldValidator } from "final-form"
import { InputNames } from "./inputParser";

export const assignValidators = (name: InputNames): FieldValidator<any>[] => {
  const validators: FieldValidator<any>[] = []
  switch (name) {
    case InputNames.TITLE:
      validators.push(required as never)
      break
    case InputNames.DESCRIPTION:
      validators.push(required as never)
      validators.push(checkLength(5) as never)
      break
  }
  return validators
}
