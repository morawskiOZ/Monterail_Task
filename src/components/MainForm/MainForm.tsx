import React from "react"
import "./MainForm.scss"
import { Form, Field } from "react-final-form"
import FormInput from "./FormInput/FormInput";

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
            <FormInput label="title" key="title" name="title" placeholder="Make it short and clear" type="text"/>
            <FormInput label="Statrs on" key="date" name="date" placeholder="dd/mm/yyyy" type="date"/>
            <FormInput label="title" key="time" name="title" placeholder="Make it short and clear" type="text"/>
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
