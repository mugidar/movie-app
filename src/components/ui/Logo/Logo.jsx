"use client"
import { ThemeContext } from '@/components/themeToggle/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Logo = ({className}) => {
    const {theme} = useContext(ThemeContext)
	return (
		<Link href={'/'}>
			<Image  className={className} alt="" width={100} height={50} src={theme =="light" ? '/logo_light.png' : '/logo_dark.png'} />
		</Link>
	)
}

export default Logo
