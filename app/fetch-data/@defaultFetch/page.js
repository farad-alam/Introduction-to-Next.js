import getJoke from '@/lib/getJoke'
import React from 'react'

async function DefaultFetch() {
    const joke = await getJoke()
    // console.log("Default Fetch",joke);
  return (
    <div
    className='border border-gray-300 flex flex-col justify-center items-center h-6/12'
    >
        <p>Default Fetch api behaviour</p>
        <h3 className='text-xl font-semibold text-center' >{joke.value}</h3>
    </div>
  )
}

export default DefaultFetch