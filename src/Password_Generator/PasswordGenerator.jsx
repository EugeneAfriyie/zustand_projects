import React from 'react'
import usePasswordStore from './Store'

const PasswordGenerator = () => {

    const {password, length, setLength, includeUppercase, toggleUppercase,toggleLowercase,includeLowercase, includeNumbers, toggleNumbers, includeSymbols, toggleSymbols,generatedPassword,generatePassword} = usePasswordStore()
  return (
    <div>PasswordGenerator</div>
  )
}

export default PasswordGenerator