import React from 'react';

export const Dialog = (props) => {
    let winner;
    if(props.winner === 'X')
        winner = props.p1;
    else if(props.winner === 'O')
        winner = props.p2;
    return (
        <>
            <div className="fixed inset-0 bg-blue-400 bg-opacity-40 grid justify-items-center">
                <div className="bg-white p-4 rounded-lg shadow-xl h-fit mt-20 w-fit">
                    <p className="text-center text-3xl">{winner} Won this Round</p>
                </div>
                
            </div>
            <div className='fixed inset-0 flex justify-center mt-96'>
                <div className="bg-white p-2 rounded-lg shadow-xl h-fit mt-36 ml-4 w-fit">
                    <button onClick={props.onReset} className='text-3xl border-2 border-black rounded-md p-2'>Next Round</button>
                </div>
            </div>

        </>
    )
}
