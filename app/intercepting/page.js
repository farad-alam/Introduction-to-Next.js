import Link from 'next/link'
import React from 'react'

function InterceptingPage() {
  return (
    <div className='w-[80%] mx-auto bg-slate-950 h-screen p-5 flex items-center justify-center gap-8'>
        <h1>Intecping Mother Page</h1>
        <Link className='link link-primary' href="/intercepting/intercept-child">Go with client side navigation</Link>
        <Link className='link link-primary' href="/intercepting/mother">Go to Mother to acces child</Link>
    </div>
  )
}

export default InterceptingPage