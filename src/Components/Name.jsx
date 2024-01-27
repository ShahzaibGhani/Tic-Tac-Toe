import React from 'react';


export const Name = (props) => {
  return (
    <div className="font-semibold text-[30px] grid justify-items-center">   
        <div className=''>Player {props.id}</div>
        <div className=''>{props.symbol}</div>
        <div>Name: {props.value}</div>
        <br></br>
        <div>
            <input type="text" placeholder='Type Name' className='text-center w-72 bg-transparent border-black border rounded-md' value={props.value} onChange={(e)=>props.onChange(e.target.value)} />
        </div>
    
    </div>
  )
}
