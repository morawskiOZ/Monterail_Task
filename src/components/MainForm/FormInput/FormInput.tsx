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
    required,
    multiElement,
    information
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
          const inputToRender = assignElement(props, input, values)

          return (
            <div className="FormInput">
              <label className="FormInput--column FormInput--firstColumn FormInput-label">
                {label}
                {required && (
                  <span className="FormInput--required">&nbsp;*</span>
                )}
              </label>
              <div className="FormInput--column FormInput--secondColumn">
                <div
                  className={multiElement ? "FormInput-multiElementRow" : ""}
                >
                  {inputToRender}
                </div>

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
              <div className=" FormInput--column FormInput--thirdColumn">
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
