import React from 'react'
import styled from 'styled-components'

const Label = styled.label`

`

const LabelComponent = (props) => {

  const {
    text
  } = props

  return (
    <Label>
      {text}
    </Label>
  )
}

export default LabelComponent