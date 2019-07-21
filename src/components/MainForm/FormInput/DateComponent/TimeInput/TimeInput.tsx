// copied and modified from https://github.com/dima-bu/react-time-input/blob/HEAD/src/timeInput.jsx

// TODO: props and state types

import React, { Component } from "react"

class TimeInput extends Component<any, any> {
  _input: any
  lastVal: string

  constructor(props: any) {
    super(props)
    this.state = {
      time: this.props.initTime || ""
    }
    this.lastVal = ""
  }

  componentDidMount() {
    if (!this.props.disabled && this.props.mountFocus) {
      setTimeout(() => {
        this._input.focus()
      }, 0)
    }
  }

  componentDidUpdate() {
    if (this.props.mountFocus) {
      setTimeout(() => {
        this._input.focus()
      }, 0)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initTime) {
      this.onChangeHandler(nextProps.initTime)
    }
  }

  isValid(val) {
    const regexp = /^\d{0,2}?\:?\d{0,2}$/

    const [hoursStr, minutesStr] = val.split(":")

    if (!regexp.test(val)) {
      return false
    }

    const hours = Number(hoursStr)
    const minutes = Number(minutesStr)

    const isValidHour = hour => Number.isInteger(hour) && hour >= 0 && hour < 13
    const isValidMinutes = minutes =>
      (Number.isInteger(minutes) && hours >= 0 && hours < 13) ||
      Number.isNaN(minutes)
    if (!isValidHour(hours) || !isValidMinutes(minutes)) {
      return false
    }

    if (minutes < 10 && Number(minutesStr[0]) > 5) {
      return false
    }

    const valArr = val.indexOf(":") !== -1 ? val.split(":") : [val]

    // check mm and HH
    if (
      valArr[0] &&
      valArr[0].length &&
      (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 13)
    ) {
      return false
    }

    if (
      valArr[1] &&
      valArr[1].length &&
      (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)
    ) {
      return false
    }

    return true
  }

  onChangeHandler(val) {
    if (val === this.state.time) {
      return
    }
    if (this.isValid(val)) {
      if (
        val.length === 2 &&
        this.lastVal.length !== 3 &&
        val.indexOf(":") === -1
      ) {
        val = val + ":"
      }

      if (val.length === 2 && this.lastVal.length === 3) {
        val = val.slice(0, 1)
      }

      if (val.length > 5) {
        return false
      }

      this.lastVal = val

      this.setState({
        time: val
      })

      if (val.length === 5) {
        this.props.onTimeChange(val)
      }
    }
  }

  getType() {
    if (this.props.type) {
      return this.props.type
    }
    return "tel"
  }

  onFocusHandler(e) {
    e.target.select()
  }

  render() {
    return (
      <input
        name={this.props.name ? this.props.name : undefined}
        className={this.props.className}
        type={this.getType()}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        value={this.state.time}
        onChange={e => this.onChangeHandler(e.target.value)}
        onFocus={this.onFocusHandler}
        ref={c => (this._input = c)}
      />
    )
  }
}

export default TimeInput
