import "./FormBlock.scss"

import React, { ReactElement } from "react"

const FormBlock = ({
  children,
  title
}: {
  children: any
  title: string
}): ReactElement => {
  return (
    <div className="FormBlock">
      <h4 className="FormBlock-title">
        {title}
        <div className="FormBlock-line" />
      </h4>

      {children}
    </div>
  )
}

export default FormBlock
