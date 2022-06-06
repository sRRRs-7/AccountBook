import Link from 'next/link'
import React from 'react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { useRecoilState } from 'recoil'
import { sideBarState } from '../../atoms/atom'

const Header = () => {
    const[isMenu, setIsMenu] = useRecoilState(sideBarState)

    return (
        <div className='flex justify-between p-5 bg-orange-400'>
            <HamburgerIcon
                color="green"
                className='text-3xl hover:cursor-pointer hover:scale-105 z-30'
                onClick={() => setIsMenu(!isMenu)}
            />
            <h1 className='text-3xl text-red-600 font-serif'>
                FooDian
            </h1>
            <Link href="/analytics">
                <a className='text-2xl font-sans text-blue-200 hover:cursor-pointer hover:scale-105'>
                    statics
                </a>
            </Link>
        </div>
    )
}

export default Header