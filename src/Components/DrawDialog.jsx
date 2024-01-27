import React from 'react'

export const DrawDialog = () => {
    return (
        <div className="fixed inset-0 bg-blue-400 bg-opacity-40 grid justify-items-center">
            <div className="bg-white p-4 rounded-lg shadow-xl mt-20 h-fit w-80">
                <p className="text-center text-6xl">Draw</p>
            </div>
        </div>
    )
}
