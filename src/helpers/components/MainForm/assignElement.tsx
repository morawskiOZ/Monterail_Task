import React from "react"
import { InputNames } from "ts/FormInput/FormInput_enum";
import { SelectOption } from "ts/FormInput/FormInputs_interface";
import { assignClassName } from "./assignClassName";

export const assignElement = (props, input, values?) => {
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
    multiElement
  } = props
  const className = assignClassName(name, values)
  switch (name) {
    // TODO: Assign element by their type not name to make it more re-usable and generic
    case InputNames.DESCRIPTION:
      // TODO: understand why function assignClassName in className had undefined for values
      return <textarea {...input} placeholder={placeholder} className={className}/>
    case InputNames.CATEGORY_ID:
      return (
        <select {...input} placeholder={placeholder} className={className} value={values[name] || ""}>
          {placeholder && <option value="" hidden>{placeholder}</option>}    
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
        <select {...input} className={className}>
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
        return (<>
              <input
            {...input}
            type={element.type}
            name={element.name}
            value={element.value}
            key={element.label}
            checked={element.value === values[name]}
            className={className}
          />
          {element.information && <span className="FormInput--description"> {element.information}</span>}
        </>
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
          className={className}
        />
      )
    case InputNames.EVENT_FEE:
      if (values[condition]) {
        return <input {...input} type={type} placeholder={placeholder} className={className}/>
      }
      return
    default:
      return <input {...input} type={type} placeholder={placeholder} className={className}/>
  }
}
