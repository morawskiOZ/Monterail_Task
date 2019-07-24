import "./FormBlock.scss"

import React, { ReactElement } from 'react'

const FormBlock = ({children, title}: {children: any, title: string}): ReactElement => {
  return (
    <div className="FormBlock">
      <h4 className="FormBlock-title">{title}</h4>
      <div className="FormBlock-line"></div>
      {children}
    </div>
  )
}

export default FormBlock
