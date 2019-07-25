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
  for (var key in values) {
    if (values[key] === null) {
      delete values[key]
    }
  }
}