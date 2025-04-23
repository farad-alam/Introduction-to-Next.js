import getJoke from '@/lib/getJoke'
import React from 'react'


// export const dynamic = "force-dynamic"

async function dynamicFetch() {
  const joke = await getJoke()
    return (
      <div
      className='border border-gray-300 flex flex-col justify-center items-center h-6/12'
      >
          <p>Dynamic Fetch api behaviour</p>
          <h3 className='text-xl font-semibold text-center' >{joke.value}</h3>
      </div>
    )
}

export default dynamicFetch