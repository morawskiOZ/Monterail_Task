import { mount } from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import TimeInput from "../TimeInput";


describe("<TimeInput/>", () => {
  it("renders and matches snapshots", async () => {
    const wrapper = mount(
        <TimeInput />
    )
    expect(toJSON(wrapper.find("input"))).toMatchSnapshot()
  })
})