import { required, checkLength } from "./formValidation"
import { FieldValidator } from "final-form"

export enum InputNames {
  TITLE = "title",
  DESCRIPTION = "description"
}

export const assignValidators = (name: InputNames): FieldValidator<any>[] => {
  const validators: FieldValidator<any>[] = []
  switch (name) {
    case InputNames.TITLE:
      validators.push(required as never)
    case InputNames.DESCRIPTION:
      validators.push(required as never)
      validators.push(checkLength(5) as never)
  }
  return validators
}
