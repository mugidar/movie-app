'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false)
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return <div className={theme}>{children}</div>
}

export default ThemeProvider
