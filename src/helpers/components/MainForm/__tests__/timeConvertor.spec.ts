import { TimeFormat } from "components/MainForm/FormInput/DateComponent/DateComponent"
import { timeConvertor } from "../timeConvertor"

it("should  convert time correctly from 12h to 24h format", () => {
  // Given
  const a = "04:23"
  const b = "16:23"
  const c = "12:23"
  const d = "12:23"
  // When
  const a_result = timeConvertor(a, TimeFormat.PM)
  const b_result = timeConvertor(b, TimeFormat.AM)
  const c_result = timeConvertor(c, TimeFormat.PM)
  const d_result = timeConvertor(d, TimeFormat.AM)
  // Then
  expect(a_result).toEqual("16:23")
  expect(b_result).toEqual("16:23")
  expect(c_result).toEqual("12:23")
  expect(d_result).toEqual("00:23")
})
