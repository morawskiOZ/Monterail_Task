import { assignElement } from "helpers/components/MainForm/assignElement"
import { assignValidators } from "helpers/components/MainForm/assignValidator"
import { composeValidators } from "helpers/components/MainForm/formValidation"
import { parseInput } from "helpers/components/MainForm/inputParser"
import React from "react"
import { Field } from "react-final-form"
import { FormInputProps } from "ts/FormInput/FormInputs_interface"
import "./FormInput.scss"

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
    condition,
    required
  } = props
  if (condition && !values[condition]) {
    return null
  } else {
    return (
      <Field
        name={name}
        validate={composeValidators(...assignValidators(name, values))}
        parse={parseInput}
        type={type}
      >
        {({ input, meta }) => {
          const inputToRender = assignElement(props, input)

          return (
            <div className="FormInput">
              <label className="FormInput--firstRow FormInput-label">{label}</label>
              <div className="FormInput--secondRow">
                {inputToRender}
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
              <div className="FormInput--thirdRow">
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            </div>
          )
        }}
      </Field>
    )
  }
}

export default FormInput
