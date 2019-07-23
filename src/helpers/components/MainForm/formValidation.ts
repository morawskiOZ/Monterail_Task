import { transformDate } from "components/MainForm/FormInput/DateComponent/DateComponent";

export const required = value => (value ? undefined : "Field Required")
export const allRequired = value => (value ? undefined : "All time and date fields Required")


export const mustBeNumber = value =>
  isNaN(value) ? "Must be a number" : undefined

export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const checkLength = (AllowedLength: number) => value => {
  return value.length < AllowedLength
    ? undefined
    : `Description cannot be longer than ${AllowedLength} characters`
}

export const checkDate = (value: string) => {
  const inputDateFormated: Date = transformDate(value)
  const date = new Date()
  return date < inputDateFormated
    ? undefined
    : `You cannot pick the date in the past`
}

export const validateEmail = (email: string) => {
  // RFC2822 email validator
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  const test = reg.test(email)
  return test ? undefined : "E-mail is not in a valid format"
}
