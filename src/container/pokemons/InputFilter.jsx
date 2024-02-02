import {Input} from '../../components/Input/Input'

import React from 'react'

export const InputFilter = ({onChange, value}) => {
  return (
    <>
    <Input type="text" value={value} onChange={onChange}/>
    </>
  )
}
