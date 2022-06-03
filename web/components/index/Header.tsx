import Link from 'next/link'
import React from 'react'
import { HamburgerIcon } from "@chakra-ui/icons"

const Header = () => {
    return (
        <div className='flex justify-between p-5 bg-orange-400'>
            <HamburgerIcon color="white" className='text-3xl hover:cursor-pointer hover:scale-105'/>
            <h1 className='text-3xl text-red-600 font-serif'>
                FooDian
            </h1>
            <Link href="/analytics">
                <a className='text-2xl font-sans text-blue-200 hover:cursor-pointer hover:scale-105'>
                    Analytics
                </a>
            </Link>
        </div>
    )
}

export default Header