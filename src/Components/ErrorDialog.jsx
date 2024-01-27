import React from 'react'

export const ErrorDialog = ({message}) => {
  console.log(message);
  return (
    <div className='error-dialog'>{message}</div>
  )
}
