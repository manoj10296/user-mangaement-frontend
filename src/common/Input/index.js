import styled from 'styled-components'

const Input = styled.input`
  
`

const InputComponent = (props) => {
  const {
    onChange,
    placeholder,
    name,
    value,
    type,
    required,
    disabled
  } = props

  return (
    <Input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      disabled={disabled}
    />
  )
}

export default InputComponent