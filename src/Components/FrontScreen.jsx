import React from 'react';
import { useState } from 'react';
import { ErrorDialog } from './ErrorDialog';
import { Name } from './Name';
import { Game } from './Game';

export const FrontScreen = () => {
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [gamestatus, setGamestatus] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleClick = () => {
        if (p1 === '' || p2 === '') {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 1000);
        }
        else { setGamestatus(true) }
    }
    return (
        <>
    <div className='h-screen bg-image bg-no-repeat bg-cover'>
    {showError && <ErrorDialog message="Please Enter the Name!"/>}
    <div className='flex justify-center text-[60px] font-skranji'>TIC TAC TOE</div>
    {gamestatus ? <Game p1={p1} p2={p2}/>:(
      <>
    <div className='flex flex-row h-80'>
    <div className='basis-1/2 border-r-2 border-black'><Name id={1} symbol={'X'} value={p1} onChange={(newValue)=>setP1(newValue)}/></div>
    <div className='basis-1/2'><Name id={2} symbol={'O'} value={p2} onChange={(newValue)=>setP2(newValue)}/></div>
    </div>
    <br/><br/><br/>
    <div className='font-skranji flex justify-center text-4xl'><button onClick={handleClick} className='border-b-2 border-black' >START</button></div>
    </>
    )}
    </div>
    </>
    );
}
