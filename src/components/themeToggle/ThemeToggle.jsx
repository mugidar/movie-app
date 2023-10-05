'use client'
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import styles from './ThemeToggle.module.css'
import { twMerge } from 'tailwind-merge'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div
			onClick={() => toggleTheme()}
			className={twMerge('flex gap-2 items-center', styles.themeToggle)}
		>
			<span className="cursor-pointer font-bold">
				<WbSunnyIcon />
			</span>
			<div className={styles.ball} style={{translate:  theme == "dark" ? "100%" : "0%"}} />
			<span className="cursor-pointer font-bold">
				<DarkModeIcon />
			</span>
		</div>
	)
}

export default ThemeToggle
