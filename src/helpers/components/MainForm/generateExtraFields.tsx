import React, { useEffect } from "react"
import { Field } from "react-final-form"
import { FormInputProps } from "ts/FormInput/FormInputs_interface"
import { assignElement } from "./assignElement"
import { assignValidators } from "./assignValidator"
import { composeValidators } from "./formValidators"
import { parseInput } from "./inputParser"
import { FormValues } from "ts/Form/Form_interfaces";

export const generateExtraFields = (
  multiFields: FormInputProps[],
  values?: FormValues,
  form?
): any => {
  return multiFields.map(fieldProps => {
    const {
      name,
      type,
      condition,
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
        key={"Field" + name}
      >
        {({ input, meta }) => {
          const inputToRender = assignElement(fieldProps, input, values)
          return (
            <div className="">
              {inputToRender}
              {meta.error && meta.touched && (
                <div className="FormInput--thirdColumn">
                  <span>{meta.error}</span>
                </div>
              )}
            </div>
          )
        }}
      </Field>
    )
  })
}
