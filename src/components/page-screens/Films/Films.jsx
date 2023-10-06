import React from 'react'
import MoviesRow from '@/components/MoviesRow/MoviesRow'
import { fetcher } from '@/utils/fetcher'

async function getTopRated() {
	const res = await fetcher(
		'https://api.themoviedb.org/3/movie/top_rated?id=11216'
	)
	return res
}
async function getGenres() {
	const res = await fetcher(
		'https://api.themoviedb.org/3/genre/movie/list?language=en'
	)
	return res
}

const Films = async () => {
	const {results:movies} = await getTopRated()
	const {results:genres} = await getGenres()
	console.log(genres)
	return (
		<div className="block-container flex flex-col">
			
			<MoviesRow movies={movies} genres={genres} sectionTitle={'Recommended Films'} />
			{/* <MoviesRow sectionTitle={'New Films'} longPosters={true} /> */}
			{/* <MoviesRow sectionTitle={'Recommended TV'} /> */}
		</div>
	)
}

export default Films
