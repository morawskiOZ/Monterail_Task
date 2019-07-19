import { assignElement } from "helpers/components/MainForm/assignElement"
import { assignValidators } from "helpers/components/MainForm/assignValidator"
import { composeValidators } from "helpers/components/MainForm/formValidation"
import {
  InputNames,
  InputTypes,
  parseInput
} from "helpers/components/MainForm/inputParser"
import React from "react"
import { Field } from "react-final-form"
import "./FormInput.scss"

export interface SelectOption {
  id: number
  name: string
}

export interface FormInputProps {
  name: InputNames
  label: string
  type: InputTypes
  placeholder: string
  values?: any
  description?: string
  counter?: boolean
  maxLength?: number
  options?: SelectOption[]
  elements?: any
  condition: any
}

const FormInput = ({ ...props }: FormInputProps) => {
  const {
    name,
    label,
    type,
    placeholder,
    values,
    description,
    counter,
    maxLength,
    options,
    elements,
    condition
  } = props
  return (
    <Field
      name={name}
      validate={composeValidators(...assignValidators(name))}
      parse={parseInput}
      type={elements ? elements.type : type}
    >
      {({ input, meta }) => {
        const inputToRender = assignElement(props, input)

        return (
          <div>
            <label>{label}</label>
            {inputToRender}
            {meta.error && meta.touched && <span>{meta.error}</span>}
            {description && inputToRender && (
              <div className="FormInput-descriptionRow">
                <span> {description} </span>
                {counter && maxLength && (
                  <span>
                    {input.value.length}/ {maxLength}
                  </span>
                )}
              </div>
            )}
          </div>
        )
      }}
    </Field>
  )
}

export default FormInput
