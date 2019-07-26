import { InputNames } from "ts/FormInput/FormInput_enum"

export const modifyValue = (name: InputNames, value: any) => {
  switch (name) {
    case InputNames.DURATION:
      return value / (60 * 60)
    default:
      return value
  }
}

export const omitNill = (values) => {
  const newValues = values
  for (var key in newValues) {
    if (newValues[key] === null) {
      delete newValues[key]
    }
  }
  return newValues
}