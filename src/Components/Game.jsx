import React, { useEffect, useState } from 'react';
import { Square } from "./Square";
import { Dialog } from './Dialog';
import { DrawDialog } from './DrawDialog';

export const Game = (props) => {

    const [value, setValue] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [isDraw, setIsDraw] = useState(false);
    const [p1Counter, setP1Counter] = useState(0);
    const [p2Counter, setP2Counter] = useState(0);


    const gameReset = ()=>
    {
        setValue(Array(9).fill(null));
        isWinner = null;
    }
    const handleReset = ()=>
    {
        setValue(Array(9).fill(null))
        setP1Counter(0);
        setP2Counter(0);
        setIsXTurn(true);
    }

    const winnerCheck = (value) => {
        const winnerIndexes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

        ]
        for (let i of winnerIndexes) {
            const [a, b, c] = i;
            if (value[a] === value[b] && value[a] === value[c] && value[a]) {
                return value[a];
            }
       }
       return null;
    }
    const updateCounter = (Winner)=>
    {
        if(Winner==='X')
        {setP1Counter(p1Counter+1);}
        if(Winner==='O')
        {setP2Counter(p2Counter+1);}
    };
    
    const onclickDiv = (index) => {
        if (value[index]) {
            return;
        }
        const copyValue = value.slice();
        copyValue[index] = isXTurn ? "X" : "O";
        setValue(copyValue);
        setIsXTurn(!isXTurn);
        
    }
    let isWinner = winnerCheck(value);
    let isFilled = value.every((e)=>e!==null);
    useEffect(()=>
    {
        updateCounter(isWinner);
        if(isFilled && (isWinner === null))
        {
            setTimeout(() => {
                isFilled = false;
                setValue(Array(9).fill(null));
                setIsXTurn(true);
                
            }, 1000);
        }
    },[isWinner, isFilled])
    
    return (
        <>
            {isWinner &&  <Dialog winner={isWinner} p1={props.p1} p2={props.p2} onReset={gameReset}/>}
            {(isFilled && (isWinner===null)) && <DrawDialog/> }
            <div className='flex justify-between items-center'>
                <div className={`ml-16 text-3xl border-2 p-1 px-5 mb-2 rounded-lg border-black ${isXTurn ? 'bg-blue-200':''}`}>{props.p1}
                    <div className='flex justify-center'>X</div>
                </div>
                <div className='text-6xl font-semibold'>{p1Counter}</div>
                <div></div><div></div><div></div><div></div>
                <div className='text-6xl font-semibold'>{p2Counter}</div>
                <div className={`mr-16 text-3xl border-2 p-1 px-5 mb-2 rounded-lg border-black ${isXTurn ? '':'bg-blue-200'}`} >{props.p2}
                    <div className='flex justify-center'>O</div>
                </div>
                
            </div>
            <div className="flex justify-center">
                <div><Square value={value[0]} onclick={() => onclickDiv(0)} /></div>
                <div className='border-x-4 border-black'><Square value={value[1]} onclick={() => onclickDiv(1)} /></div>
                <div><Square value={value[2]} onclick={() => onclickDiv(2)} /></div>
            </div>
            <div className="flex justify-center">
                <div className='border-y-4 border-black'><Square value={value[3]} onclick={() => onclickDiv(3)} /></div>
                <div className='border-4 border-black'><Square value={value[4]} onclick={() => onclickDiv(4)} /></div>
                <div className='border-y-4 border-black'><Square value={value[5]} onclick={() => onclickDiv(5)} /></div>
            </div>
            <div className="flex justify-center">
                <div ><Square value={value[6]} onclick={() => onclickDiv(6)} /></div>
                <div className='border-x-4 border-black'><Square value={value[7]} onclick={() => onclickDiv(7)} /></div>
                <div><Square value={value[8]} onclick={() => onclickDiv(8)} /></div>
            </div>
            <br/>
            <div className='font-skranji flex justify-center text-4xl'>
                <button onClick={handleReset} className='border-b-4 mt-10 border-black'>Reset</button>
            </div>

        </>
    )
}
