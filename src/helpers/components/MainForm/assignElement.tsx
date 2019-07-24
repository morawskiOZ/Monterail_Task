import React from "react"
import { InputNames } from "ts/FormInput/FormInput_enum";
import { SelectOption } from "ts/FormInput/FormInputs_interface";
import { assignClassName } from "./assignClassName";

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
      return <textarea {...input} placeholder={placeholder} className={assignClassName(name)}/>
    case InputNames.CATEGORY_ID:
      return (
        <select {...input} placeholder={placeholder} className={assignClassName(name)}>
          {options.map((option: SelectOption) => {
            return (
              <option value={option.id} key={option.id} id={`${option.id}`}>
                {option.name}
              </option>
            )
          })}
        </select>
      )
    case InputNames.COORDINATOR_ID:
      return (
        <select {...input} className={assignClassName(name)}>
          {options.map((option: SelectOption) => {
            return (
              <option value={option.id} key={option.id} id={`${option.id}`}>
                {option.name} {option.lastname}
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
            key={element.label}
            checked={element.value === values.paid_event}
            className={assignClassName(name)}
          />
        )
      })
    case InputNames.DURATION:
      return (
        <input
          {...input}
          type={type}
          name={name}
          label={label}
          value={input.value ? input.value / 60 : input.value}
          placeholder={placeholder}
          className={assignClassName(name)}
        />
      )
    case InputNames.EVENT_FEE:
      if (values[condition]) {
        return <input {...input} type={type} placeholder={placeholder} className={assignClassName(name)}/>
      }
      return
    default:
      return <input {...input} type={type} placeholder={placeholder} className={assignClassName(name)}/>
  }
}
