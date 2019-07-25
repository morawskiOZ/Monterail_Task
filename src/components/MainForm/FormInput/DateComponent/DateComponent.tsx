import { timeConvertor } from "helpers/components/MainForm/timeConvertor"
import React, { ReactElement, useState } from "react"
import "./DateComponent.scss"
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
      <label className="FormInput--column FormInput--firstColumn FormInput-label">
        {label}
      </label>

      <div className="FormInput--column FormInput--secondColumn">
        <div className="FormInput-multiElementRow">
          <input
            {...input}
            type="date"
            onChange={handleDateChange}
            value={day}
            className={`FormInput-input ${
              day ? "" : "FormInput-input--placeholder"
            }`}
          />
          <span>at</span>
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

      {error && touched && <span>{error}</span>}
    </div>
  )
}
