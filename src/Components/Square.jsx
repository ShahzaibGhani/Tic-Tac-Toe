import React from 'react'

export const Square= (props) => {
  return (
    <div onClick={props.onclick} className="w-40 h-32 flex justify-center items-center text-6xl font-skranji cursor-pointer">{props.value}</div>
  )
}
