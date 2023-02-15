import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-2 max-w-6xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <h1 className='p-2 text-2xl font-bold'>
                    <span className='text-blue-600'>Mint</span> Marketplace
                </h1>
            </Link>
        </div>

        <div className='flex items-center space-x-5 text-sky-600'>
            <a href='https://paypal.me/stimil'><h3>Donate</h3></a>
        </div>

    </header>
  )
}

export default Header;