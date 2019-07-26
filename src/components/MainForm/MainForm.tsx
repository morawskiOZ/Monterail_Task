import { assignValidators } from "helpers/components/MainForm/assignValidator"
import { composeValidators } from "helpers/components/MainForm/formValidators"
import { omitNill } from "helpers/components/MainForm/modifyValue"
import React, { useState } from "react"
import { Field, Form } from "react-final-form"
import { InputNames, InputTypes } from "ts/FormInput/FormInput_enum"
import * as inputsSchema from "../../data/FormSchema/inputs.json"
import FormBlock from "./FormBlock/FormBlock"
import { DateComponent } from "./FormInput/DateComponent/DateComponent"
import FormInput from "./FormInput/FormInput"
import "./MainForm.scss"
import { FormValues } from "ts/Form/Form_interfaces.js"

const MainForm = () => {
  const onSubmit = (values: FormValues) => {
    const valuesOmitNil = omitNill(values)
    console.log(valuesOmitNil)
    setSubmitted(true)
  }

  const [submitted, setSubmitted] = useState<boolean>(false)

  if (submitted) {
    return (
      <FormBlock title="Success" className="App-content--middle FormBlock--success" >
        <span className="FormBlock-description">Event has been created. </span>
      </FormBlock>
    )
  }

  return (
    <div className="MainForm App-content--middle">
      <Form
        mutators={{
          resetFee: (args, state, utils) => {
            utils.changeValue(state, InputNames.EVENT_FEE, () => "")
          }
        }}
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
                  values={values as FormValues}
                  required={input.required}
                  multiElement={input.multiElement}
                  information={input.information}
                  multiFields={input.multiFields}
                  form={form}
                />
              ))}
            </FormBlock>
            <FormBlock title={"Coordinator"}>
              {inputsSchema.coordinator.map(input => (
                <FormInput
                  key={input.name}
                  name={input.name as InputNames}
                  type={input.type as InputTypes}
                  label={input.label}
                  placeholder={input.placeholder}
                  options={input.options}
                  values={values as FormValues}
                  defaultValue={input.defaultValue}
                  required={input.required}
                />
              ))}
            </FormBlock>
            <FormBlock title={"When"}>
              <Field
                key={"date"}
                name={InputNames.DATE}
                label="Starts on "
                component={DateComponent}
                form={form}
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
                  values={values as FormValues}
                  multiElement={input.multiElement}
                  information={input.information}
                  plural={input.plural}
                />
              ))}
            </FormBlock>
            <div className="MainForm-buttonContainer">
              <button
                type="submit"
                disabled={submitting}
                className="MainForm-button MainForm-button--submit"
              >
                Publish Event
              </button>
              <button
                type="reset"
                onClick={form.reset}
                disabled={submitting || pristine}
                className="MainForm-button MainForm-button--reset"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default MainForm
