import React from 'react'
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';

export const Editor = ({ markdown, handlechange, handlemaximizeeditor, maximizeeditor }) => {
    return (
        <div className='md:m-7'>
            <div className="  flex flex-col shadow-slate-600 shadow-2xl">
                <div className='bg-neutral-400 flex flex-row justify-between items-center'>
                    <h1 className='text-2xl bg-neutral-400 p-3 border-2 border-slate-400 border-solid border-b-0'>
                        Editor
                    </h1>

                    <button onClick={handlemaximizeeditor}
                        className='mr-3 text-2xl  ease-in-out duration-300  hover:text-slate-700 hover:text-3xl'>
                        {maximizeeditor ? <BsFullscreenExit /> : <BsArrowsFullscreen />}

                    </button>
                </div>
                <textarea className='min-h-screen bg-slate-100	 p-3 border-2 border-slate-400 border-solid' type="text"
                    onChange={handlechange}
                    value={markdown}>

                </textarea>

            </div>
        </div>

    )
}
