import { timeConvertor } from "helpers/components/MainForm/timeConvertor"
import React, { useState, ReactElement } from "react"
import "./DateComponent.scss"
import TimeInput from "./TimeInput/TimeInput"

// TODO: add types everywhere

export enum TimeFormat {
  AM = "AM",
  PM = "PM"
}

export const DateComponent = ({
  input,
  meta: { active, error, touched },
  label
}: any): ReactElement => {
  const [day, setDay] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [format, setFormat] = useState<TimeFormat>(TimeFormat.AM)

  const handleDateChange = event => {
    setDay(event.target.value)
    input.onChange(`${event.target.value}T${time}`)
  }
  const handleTimeChange = value => {
    setTime(timeConvertor(value, format))
    input.onChange("someValue")
  }
  const handleFormatChange = event => {
    setFormat(event.target.value)

    input.onChange("someValue")
  }

  return (
    <div tabIndex={0} className={""}>
      <label>{label}</label>
      <input
        type="date"
        onChange={handleDateChange}
        value={day}
        className="DateComponent-dateInput"
      />
      <span>at</span>
      <TimeInput onTimeChange={handleTimeChange} placeholder={"--:--"}/>
      <input
        type="radio"
        name="format"
        value={TimeFormat.AM}
        checked={format === TimeFormat.AM}
        onChange={handleFormatChange}
      />
      <input
        type="radio"
        name="format"
        value={TimeFormat.PM}
        checked={format === TimeFormat.PM}
        onChange={handleFormatChange}
      />
      {error && touched && <span>{error}</span>}
    </div>
  )
}
