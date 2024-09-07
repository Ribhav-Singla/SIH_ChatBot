import React from 'react'
import Message from './Message'

function History() {
  return (
    <div className='p-5 mt-10'>
        <h1 className='font-semibold text-lg border-b-2 border-black pb-2'>History</h1>
        <div className='mt-5 flex flex-col gap-3'>
            <div className='flex justify-start items-center gap-3'>
                <Message/>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
                <Message/>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
                <Message/>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    </div>
  )
}

export default History