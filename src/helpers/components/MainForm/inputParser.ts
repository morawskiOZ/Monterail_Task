import { InputNames } from "ts/FormInput/FormInput_enum"

export const parseInput = (value: any, name: InputNames | string) => {
  switch (name) {
    case InputNames.EVENT_FEE:
    case InputNames.CATEGORY_ID:
    case InputNames.REWARD:
      if (value && value !== "") {
        return isNaN(value) ? value : parseFloat(value)
      } else {
        return value
      }
      
    case InputNames.PAID_EVENT:
      return value === "true"
    case InputNames.DURATION:
        if (value && value !== "") {
          return isNaN(value) ? value : parseFloat(value) * 60 * 60
        } else {
          return value
        }
    default:
      return value
  }
}
