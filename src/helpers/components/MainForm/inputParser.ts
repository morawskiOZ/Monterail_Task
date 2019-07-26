import { InputNames } from "ts/FormInput/FormInput_enum";

export const parseInput = (value: any, name: InputNames | string) => {
  switch (name) {
    case InputNames.EVENT_FEE:
    case InputNames.CATEGORY_ID:
    case InputNames.REWARD:
    
      return parseFloat(value)
    case InputNames.PAID_EVENT:
      return value === "true"
    case InputNames.DURATION:
      return parseFloat(value) * 60 * 60
    default:
      return value
  }
}
