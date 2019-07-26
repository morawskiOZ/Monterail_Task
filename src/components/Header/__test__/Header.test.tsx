import { mount } from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import Header from "../Header"

describe("<Header/>", () => {
  it("renders and matches snapshots", async () => {
    const wrapper = mount(<Header />)
    expect(toJSON(wrapper.find("header"))).toMatchSnapshot()
  })
})
