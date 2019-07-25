import React from "react"
import { SelectOption } from "ts/FormInput/FormInputs_interface"
import { InputNames } from "ts/FormInput/FormInput_enum"
import { assignClassName } from "./assignClassName"
import { modifyValue } from "./modifyValue"

export const assignElement = (props, input, values?, meta?) => {
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
    multiElement,
    information
  } = props
  const className = assignClassName(name, values, meta)
  switch (name) {
    // TODO: Assign element by their specific type(not input type) not name to make it more re-usable and generic
    case InputNames.DESCRIPTION:
      // TODO: understand why function assignClassName in className had undefined for values
      return (
        <textarea {...input} placeholder={placeholder} className={className} />
      )
    case InputNames.CATEGORY_ID:
      return (
        <select
          {...input}
          placeholder={placeholder}
          className={className}
          value={values[name] || ""}
        >
          {placeholder && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
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
      const separateLoggedInUser = (options: SelectOption[], id: number): [SelectOption, SelectOption[]] => {
        const user = options.find(option => option.id === id)
        const restEntries = options.filter(option => option.id !== id)
        return [user, restEntries]
      }
      const [userOption, restOption] = separateLoggedInUser(options, 3)
      return (
        <select {...input} className={className}>
          <option value="" disabled>
            Me
          </option>
          <option value={userOption.id} key={userOption.id} id={`${userOption.id}`}> 
                {userOption.name} {userOption.lastname}
              </option>
          <option value="" disabled>
            Others
          </option>
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
          <>
            <input
              {...input}
              type={element.type}
              name={element.name}
              value={element.value}
              key={element.label}
              checked={element.value === values[name]}
              className={className}
            />
            {element.information && (
              <span className="FormInput-description">
                {element.information}
              </span>
            )}
          </>
        )
      })
    case InputNames.DURATION:
    case InputNames.REWARD:
      return (
        <>
          <input
            {...input}
            type={type}
            name={name}
            label={label}
            // condition to avoid showing 0 instead of placeholder
            value={input.value ? modifyValue(name, input.value) : input.value}
            placeholder={placeholder}
            className={className}
          />
          {information && (
            <span className="FormInput-description FormInput-description--bigGap">
              {information}
            </span>
          )}
        </>
      )
    case InputNames.EVENT_FEE:
      if (values[condition]) {
        return (
          <input
            {...input}
            type={type}
            placeholder={placeholder}
            className={className}
          />
        )
      }
      return
    default:
      return (
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className={className}
        />
      )
  }
}
