import { TimeFormat } from "components/MainForm/FormInput/DateComponent/DateComponent"

export const timeConvertor = (time: string, format: TimeFormat) => {
  const [hours, minutes] = time.split(":")

  if (format === TimeFormat.AM) {
    if (parseFloat(hours) === 12) {
      return `00:${minutes}`
    } else {
      return time
    }
  } else {
    if (parseFloat(hours) === 12) {
      return time
    } else {
      return `${parseFloat(hours) + 12}:${minutes}`
    }
  }
}
