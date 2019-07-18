import React from "react"
import { Form, Field } from 'react-final-form'
import "./FormInput.scss"


interface FormInputProps {
name: string
label: string
type: string
placeholder: string
}

const required = (value: any )=> (value ? undefined : 'Required')

const FormInput = ({name, label, placeholder, type}: FormInputProps)  => {
  return (
    <Field name={name} validate={required}>
    {({ input, meta }) => (
      <div>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
  )
}

export default FormInput
