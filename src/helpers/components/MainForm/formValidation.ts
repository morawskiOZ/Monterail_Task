export const required = value => (value ? undefined : "Required")

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

export const validateEmail = (email: string) => {
  // RFC2822 email validator
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  const test = reg.test(email)
  return test ? undefined : "E-mail is not in a valid format"
}
