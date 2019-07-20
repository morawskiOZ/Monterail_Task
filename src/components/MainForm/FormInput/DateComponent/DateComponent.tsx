import React, { useState } from "react";
import "./DateComponent.scss"
import TimeInput from "./TimeInput/TimeInput";


enum TimeFormat {
  AM = "AM",
  PM = "PM"
}

export const DateComponent = ({
  input,
  meta: { active, error, touched }
}: any) => {

  const [day, setDay] = useState<any>("")
  const [time, setTime] = useState<any>("")
  const [format, setFormat] = useState<any>(TimeFormat.AM)

const handleDateChange = (event) => {
  setDay(event.target.value)
  console.log(day,time,format) 
  input.onChange("someValue")
}
const handleTimeChange = (event) => {
  debugger
  console.log(event.target.value)
  setTime(event.target.value)
  console.log(day,time,format) 

  input.onChange("someValue")
}
const handleFormatChange = (event) => {
  setFormat(event.target.value)
  console.log(day,time,format) 

  input.onChange("someValue")
}

return (
<div tabIndex={0} className={""}>
  <label>Label</label>
  <input type="date" onChange={handleDateChange} value={day} className="DateComponent-dateInput"/>
  <span>at</span>
  <TimeInput onTimeChange={(val)=> console.log(val)}/>
  <input type="radio" name="format"  value={TimeFormat.AM} checked={format === TimeFormat.AM} onChange={handleFormatChange}/>
  <input type="radio" name="format" value={TimeFormat.PM} checked={format === TimeFormat.PM} onChange={handleFormatChange}/>
  {error && touched && <span>{error}</span>}
</div>
)}
