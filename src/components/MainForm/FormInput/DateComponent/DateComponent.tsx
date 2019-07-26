import { timeConvertor } from "helpers/components/MainForm/timeConvertor"
import React, { ReactElement, useState } from "react"
import TimeInput from "./TimeInput/TimeInput"

// TODO: add types everywhere
// TODO: make this component more generic, accepting styles from outside for example, more generic props

export enum TimeFormat {
  AM = "AM",
  PM = "PM"
}

export const transformDate = (date: string): Date => new Date(date + ":00Z")

export const DateComponent = ({
  input,
  meta: { active, error, touched },
  label
}: any): ReactElement => {
  const [day, setDay] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [format, setFormat] = useState<TimeFormat>(TimeFormat.AM)

  const handleDateChange = ({ target: { value } }) => {
    setDay(value)
    if (time) {
      const date = `${value}T${timeConvertor(time, format)}`
      input.onChange(date)
    }
  }
  const handleTimeChange = value => {
    setTime(value)
    if (day) {
      const date = `${day}T${timeConvertor(value, format)}`
      input.onChange(date)
    }
  }
  const handleFormatChange = ({ target: { value } }) => {
    setFormat(value)
    if (day && time) {
      input.onChange(`${day}T${timeConvertor(time, value)}`)
    }
  }

  return (
    <div className="FormInput">
      <label className="FormInput--firstColumn FormInput-label">
        {label} <span className="FormInput--required">&nbsp;*</span>
      </label>

      <div className="FormInput--secondColumn">
        <div
          className={`FormInput-multiElementRow FormInput-multiElementRow--veryLong FormInput-multiElementRow--bigger ${
            error && touched ? "FormInput-input--error" : ""
          }`}
        >
          <input
            {...input}
            type="date"
            onChange={handleDateChange}
            value={day}
            className={`FormInput-input FormInput-input--date ${
              day ? "" : "FormInput-input--placeholder"
            }`}
          />
          <span className="FormInput-description">at</span>
          <TimeInput
            onTimeChange={handleTimeChange}
            placeholder={"--:--"}
            input={input}
            className={"FormInput-input FormInput-input--verySmall"}
          />
          <input
            {...input}
            type="radio"
            name="format"
            value={TimeFormat.AM}
            checked={format === TimeFormat.AM}
            onChange={handleFormatChange}
            required
            className="FormInput-input FormInput-input--radio"
          />
          <span className="FormInput-description"> AM </span>
          <input
            {...input}
            type="radio"
            name="format"
            value={TimeFormat.PM}
            checked={format === TimeFormat.PM}
            onChange={handleFormatChange}
            className="FormInput-input FormInput-input--radio"
          />
          <span className="FormInput-description"> PM</span>
        </div>
      </div>
      <div className="FormInput--thirdColumn">
        {error && touched && (
          <div className="FormInput-error FormInput-error--arrow">{error}</div>
        )}
      </div>
    </div>
  )
}
