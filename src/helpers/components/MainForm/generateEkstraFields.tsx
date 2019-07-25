import React, { useEffect } from "react"
import { Field } from "react-final-form"
import { FormInputProps } from "ts/FormInput/FormInputs_interface"
import { assignElement } from "./assignElement"
import { assignValidators } from "./assignValidator"
import { composeValidators } from "./formValidation"
import { parseInput } from "./inputParser"

export const generateExtraFields = (
  multiFields: FormInputProps[],
  values?,
  form?
): any => {
  const a = multiFields.map(fieldProps => {
    const {
      name,
      label,
      type,
      placeholder,
      description,
      counter,
      maxLength,
      options,
      elements,
      condition,
      required,
      multiElement,
      information,
      multiFields
    } = fieldProps

    useEffect(() => {
      return () => {
        if (condition && !values[condition]) {
          // clear the value after input unmounts, meaning user doesn't want to set the value
          values[name] && form.change(name, null)
        }
      }
    })
    if (condition && !values[condition]) {
      return null
    }
    return (
      <Field
        name={name}
        validate={composeValidators(...assignValidators(name, values))}
        parse={parseInput}
        type={type}
      >
        {({ input, meta }) => {
          const inputToRender = assignElement(fieldProps, input, values)
          return (
            <div className="">
              {inputToRender}
              {meta.error && meta.touched && (
                <div className=" FormInput--column FormInput--thirdColumn">
                  <span>{meta.error}</span>
                </div>
              )}
            </div>
          )
        }}
      </Field>
    )
  })
  return a
}
