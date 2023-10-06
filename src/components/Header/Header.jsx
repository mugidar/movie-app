import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import styles from './Header.module.css'
import SearchInput from '../Search/SearchInput'
import AuthLink from '../AuthLink/AuthLink'
import { twMerge } from 'tailwind-merge'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Logo from '../ui/Logo/Logo'

const routes = [
	{ url: '/movies', title: 'Movies' },
	{ url: '/series', title: 'Series' },
	{ url: '/channels', title: 'Channels' },
	{ url: '/music', title: 'Music' }
]

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={twMerge('flex justify-between', styles.container)}>
				<div className="flex gap-4 items-center justify-around">
					<Logo/>
					<ul className="flex gap-2">
						{routes.map(route => (
							<Link key={route.url} href={route.url}>
								<li>{route.title}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle/>
					<SearchInput />
					<AuthLink />
				</div>
			</div>
		</header>
	)
}

export default Header
