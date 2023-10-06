import React from 'react'
import MoviesRow from '@/components/MoviesRow/MoviesRow'
import { fetcher } from '@/utils/fetcher'

async function getTopRated() {
	const res = await fetcher(
		'https://api.themoviedb.org/3/movie/top_rated?id=11216'
	)
	return res
}
async function getUpcoming() {
	const res = await fetcher(
		'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
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
	const {results:upcoming} = await getUpcoming()
	const {results:genres} = await getGenres()
	console.log(genres)
	return (
		<div className="block-container flex flex-col">
		
			<MoviesRow movies={movies} genres={genres} sectionTitle={'Top Rated Films'} />
			<MoviesRow movies={upcoming} sectionTitle={'Upcoming'} longPosters={true} /> 
			{/* <MoviesRow sectionTitle={'Recommended TV'} /> */}
		</div>
	)
}

export default Films
