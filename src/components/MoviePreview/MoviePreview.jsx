'use client'

import React, { useState } from 'react'
import styles from './MoviePreview.module.css'
import Image from 'next/image'
import Button from '../ui/Button/Button'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
const MoviePreview = ({ longPoster = false,id, title, overview, vote_average,poster_path,genres }) => {
	const [isHovered, setIsHovered] = useState(false)
	
	return (
		<Link
		href={`/movies/${id}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={twMerge(
				styles.moviePreview,
				`relative w-[200px] ${longPoster  ? "h-[300px]" : "h-[200px]"}`
			)}
		>
			
			<Image fill className="object-cover" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />

			{isHovered ? (
				<div className={styles.details}>
					<div className={styles.genres}>

					</div>
					<div className="p-2">
						<h1 className={`${styles.title} font-bold text-md bg-neutral-600/50 p-2`}>{title}</h1>
						<p className={`${styles.description} w-16 overflow-hidden whitespace-nowrap text-ellipsis`}>
							{overview}
						</p>
						<Button className="!p-1 !text-sm">Read more</Button>
					</div>
					<div className={styles.details_info}>
						<span className={styles.logo}>ABC</span>
						<span className={styles.rating}>{vote_average}</span>
					</div>
				</div>
			) : (
				<div className={styles.shortDetails}>
					<span className={styles.logo}>ABC</span>
					<span className={styles.rating}>{vote_average}</span>
				</div>
			)}
		</Link>
	)
}

export default MoviePreview
