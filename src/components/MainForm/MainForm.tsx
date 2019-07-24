import React from "react"
import { Field, Form } from "react-final-form"
import { DateComponent } from "./FormInput/DateComponent/DateComponent"
import FormInput from "./FormInput/FormInput"
import * as inputsSchema from "../../data/FormSchema/inputsSchema.json"
import "./MainForm.scss"
import { composeValidators } from "helpers/components/MainForm/formValidation"
import { assignValidators } from "helpers/components/MainForm/assignValidator"
import { InputNames, InputTypes } from "ts/FormInput/FormInput_enum"
import FormBlock from "./FormBlock/FormBlock"

// TODO: maybe add content styling to APP max width and color to body
const MainForm = () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
// TODO: maybe the div is redundant

    <div className="MainForm">
      <Form
      
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="MainForm-form">
            <FormBlock title={"About"}>
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
                  required={input.required}
                />
              ))}
            </FormBlock>

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
              name={InputNames.DATE}
              label="Starts on "
              component={DateComponent}
              validate={composeValidators(
                ...assignValidators(InputNames.DATE, values)
              )}
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
