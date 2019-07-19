import React from "react"
import { SelectOption } from "components/MainForm/FormInput/FormInput"
import { InputNames } from "./inputParser"

export const assignElement = (props, input) => {
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
  switch (name) {
    case InputNames.DESCRIPTION:
      return <textarea {...input} placeholder={placeholder} />
    case InputNames.CATEGORY_ID:
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
    case InputNames.PAID_EVENT:
      return elements.map(element => {
        return (
          <input
            {...input}
            type={element.type}
            name={element.name}
            label={element.label}
            value={element.value}
          />
        )
      })
    case InputNames.EVENT_FEE:
      if (values[condition]) {
        return <input {...input} type={type} placeholder={placeholder} />
      }
      break
    default:
      return <input {...input} type={type} placeholder={placeholder} />
  }
}
