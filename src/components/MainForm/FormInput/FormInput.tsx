import { assignElement } from "helpers/components/MainForm/assignElement"
import { assignValidators } from "helpers/components/MainForm/assignValidator"
import { composeValidators } from "helpers/components/MainForm/formValidation"
import { generateExtraFields } from "helpers/components/MainForm/generateExtraFields"
import { parseInput } from "helpers/components/MainForm/inputParser"
import React, { ReactElement } from "react"
import { Field } from "react-final-form"
import { FormInputProps } from "ts/FormInput/FormInputs_interface"
import "./FormInput.scss"

const FormInput = ({ ...props }: FormInputProps): ReactElement => {
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
    information,
    multiFields,
    form,
    defaultValue
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
        defaultValue={defaultValue}
      >
        {({ input, meta }) => {
          const inputToRender = assignElement(props, input, values, meta)
          const extraFields = multiFields
            ? generateExtraFields(multiFields, values, form)
            : []

          return (
            <div className="FormInput">
              {label && (
                <label className="FormInput--column FormInput--firstColumn FormInput-label">
                  {label}
                  {required && (
                    <span className="FormInput--required">&nbsp;*</span>
                  )}
                </label>
              )}
              <div className="FormInput--column FormInput--secondColumn">
                <div
                  className={multiElement ? "FormInput-multiElementRow" : ""}
                >
                  {inputToRender}
                  {multiElement && multiFields && extraFields}
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
              {meta.error && meta.touched && (
                <div className="FormInput--column FormInput--thirdColumn">
                  <div className="FormInput-error FormInput-error--arrow" >{meta.error}</div>
                </div>
              )}
            </div>
          )
        }}
      </Field>
    )
  }
}

export default FormInput
