import { InputNames, InputTypes } from "./FormInput_enum";

export interface SelectOption {
  id: number
  name: string
  lastname?: string
}

export interface FormInputProps {
  name: InputNames
  type: InputTypes
  placeholder?: string
  label?: string
  values?: any
  description?: string
  counter?: boolean
  maxLength?: number
  options?: SelectOption[]
  elements?: any
  condition?: any
  required?: boolean
  multiElement?: boolean
  information?: string
  multiFields?: any[]
  form?: any
  defaultValue?: any
}
