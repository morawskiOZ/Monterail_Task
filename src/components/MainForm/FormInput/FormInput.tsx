import {
  assignValidators,
  InputNames
} from "helpers/components/MainForm/assignValidator"
import { composeValidators } from "helpers/components/MainForm/formValidation"
import React, { ReactElement } from "react"
import { Field } from "react-final-form"
import "./FormInput.scss"

export enum InputTypes {
  TEXT = "text",
  TEXT_AREA = "textarea",
  SELECT = "select",
  PAYMENT_GROUP = "paymentGroup"
}

interface SelectOption {
  id: number
  name: string
}

export interface FormInputProps {
  name: InputNames
  label: string
  type: InputTypes
  placeholder: string
  values?:any
  description?: string
  counter?: boolean
  maxLength?: number
  options?: SelectOption[],
  // elements?: any
}

const FormInput = ({
  name,
  label,
  placeholder,
  type,
  counter,
  values,
  description,
  maxLength,
  options,
  elements
}: FormInputProps) => {

  const elementToRender = (type: InputTypes, input): ReactElement => {
    switch (type) {
      case InputTypes.TEXT_AREA:
        return <textarea {...input} placeholder={placeholder} />
      case InputTypes.SELECT:
        return (
          <select {...input} placeholder={placeholder}>
            {options.map((option: SelectOption) => {
              return (
                <option value={option.id} id={`${option.id}`}>
                  {option.name}
                </option>
              )
            })}
          </select>
        )
        case InputTypes.PAYMENT_GROUP:
          return (
            elements.map( element => {
              if (element.name === "paid_event") {
                return <input  {...input}  type={element.type} name ={element.name} label={element.label} value={element.value} />
              }
            })
          )
      default:
        return <input {...input} type={type} placeholder={placeholder} />
    }
  }

  return (
    <Field name={name} validate={composeValidators(...assignValidators(name))}>
      {({ input, meta }) => (
        <div>
          <label>{label}</label>
          {elementToRender(type, input)}
          {meta.error && meta.touched && <span>{meta.error}</span>}
          {description && (
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
      )}
    </Field>
  )
}

export default FormInput
