import React, { ReactElement } from "react"
import "./FormBlock.scss"

const FormBlock = ({
  children,
  title,
  className
}: {
  children: any
  title: string
  className?: string
}): ReactElement => {
  return (
    <div className={`FormBlock ${className}`}>
      <h4 className="FormBlock-title">
        {title}
        <div className="FormBlock-line" />
      </h4>

      {children}
    </div>
  )
}

export default FormBlock
