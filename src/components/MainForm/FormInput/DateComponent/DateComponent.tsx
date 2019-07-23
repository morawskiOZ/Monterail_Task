import { timeConvertor } from "helpers/components/MainForm/timeConvertor"
import React, { useState, ReactElement } from "react"
import "./DateComponent.scss"
import TimeInput from "./TimeInput/TimeInput"

// TODO: add types everywhere

export enum TimeFormat {
  AM = "AM",
  PM = "PM"
}

export const transformDate = (date: string): Date => new Date(date+ ":00Z")

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
    const date = `${event.target.value}T${time}`
    time && input.onChange(date)
  }
  const handleTimeChange = value => {
    setTime(value)
    const date = `${day}T${timeConvertor(value, format)}`
    day && input.onChange(date)

  }
  const handleFormatChange = event => {
    setFormat(event.target.value);
    (day && time)  && input.onChange(`${day}T${timeConvertor(time, event.target.value)}`)
  }

  return (
    <div tabIndex={0} className={""}>
      <label>{label}</label>
      <input
        {...input}
        type="date"
        onChange={handleDateChange}
        value={day}
        className="DateComponent-dateInput"
      />
      <span>at</span>
      <TimeInput onTimeChange={handleTimeChange} placeholder={"--:--"} input={input} />
      <input
        {...input}
        type="radio"
        name="format"
        value={TimeFormat.AM}
        checked={format === TimeFormat.AM}
        onChange={handleFormatChange}
        required
      />
      <input
        {...input}
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
