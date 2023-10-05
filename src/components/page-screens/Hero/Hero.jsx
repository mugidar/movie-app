import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.css'
import { twMerge } from 'tailwind-merge'
const Hero = () => {
	return (
		<div className="relative z-[0] h-[calc(100vh-70px)]">
			<div className="block-container flex h-full ">
				<div className="h-full w-screen ">
					<Image alt="" fill src={'/slide.png'} className=" object-cover" />
					<div className="relative z-10 flex flex-col items-start justify-center h-full  ">
						<h1
							className={twMerge(
								styles.textContent,
								'dark:bg-black/50 bg-white/50'
							)}
						>
							Dive into a universe of un-ending content and channels
						</h1>
						<Button className={'mt-10'}>Start FREE Trial</Button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Hero
