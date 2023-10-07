import React from 'react'
import styles from './MoviesRow.module.css'
import Image from 'next/image'
import MoviePreview from '../MoviePreview/MoviePreview'
import Link from 'next/link'

const MoviesRow = ({ longPosters, sectionTitle, movies, genres }) => {
	return (
		<div className="mb-[80px]">
			<span className="flex items-center gap-5">
				<h1 className={styles.title}>{sectionTitle}</h1>
				<Link className="cursor-pointer" href={'/'}>
					View all {'>'}
				</Link>
			</span>
			<div className="flex justify-between">
				{movies?.length > 0 ? (
					movies
						.slice(0, 6)
						.map(item => (
							<MoviePreview
								key={item.id}
								genres={genres}
								{...item}
								longPoster={longPosters}
							/>
						))
				) : (
					<h1>Nothing</h1>
				)}
			</div>
		</div>
	)
}

export default MoviesRow
