import { InputNames, InputTypes } from "helpers/components/MainForm/inputParser"
import React from "react"
import { Field, Form } from "react-final-form"
import { DateComponent } from "./FormInput/DateComponent/DateComponent"
import FormInput from "./FormInput/FormInput"
import * as inputsSchema from "./FormSchema/inputsSchema.json"
import "./MainForm.scss"

const MainForm = () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            {inputsSchema.about.map(input => (
              <FormInput
                key={input.name}
                name={input.name as InputNames}
                label={input.label}
                type={input.type as InputTypes}
                placeholder={input.placeholder}
                description={input.description}
                counter={input.counter}
                maxLength={input.maxLength}
                options={input.options}
                elements={input.elements}
                condition={input.condition}
                values={values}
              />
            ))}
            {inputsSchema.coordinator.map(input => (
              <FormInput
                key={input.name}
                name={input.name as InputNames}
                type={input.type as InputTypes}
                label={input.label}
                placeholder={input.placeholder}
                options={input.options}
                values={values}
              />
            ))}
            <Field
              name="date"
              label="This does not render any input component (and is very silly, but does the trick 😅)"
              component={DateComponent}
            />
            {inputsSchema.when.map(input => (
              <FormInput
                key={input.name}
                name={input.name as InputNames}
                type={input.type as InputTypes}
                label={input.label}
                placeholder={input.placeholder}
                values={values}
                description={input.description}
              />
            ))}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    </div>
  )
}

export default MainForm
