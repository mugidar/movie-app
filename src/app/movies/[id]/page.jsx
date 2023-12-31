import { fetcher } from '@/utils/fetcher'
import Image from 'next/image'
import React from 'react'

const getMovieDetails = async id => {
	const res = fetcher(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
	return res
}

const page = async ({ params }) => {
	const { id } = params
	const movie = await getMovieDetails(id)
	return (
		<div className="block-container">
			<div className="mt-10 flex justify-center gap-5 ">
				<div className="relative w-[300px] h-[400px] bg-neutral-50/50">
					<Image
						alt=""
						fill
						className="object-cover"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					/>
				</div>
				<div className="flex flex-col justify-between p-5">
					<div>
						<h1 className="font-bold text-4xl">
							{movie.title} - {movie.original_language}
						</h1>
						<em className="text-white/80">{movie.tagline}</em>
					</div>
					<p className="mt-10 w-[500px]">
						<em>Description:</em> {movie.overview}
					</p>
					<span className="flex gap-5">
						<em>Language: </em>
						<span className="flex gap-2">
							{movie.spoken_languages.length > 0 &&
								movie.spoken_languages.map((language, index) => (
									<span key={index}>{language.english_name},</span>
								))}
						</span>
					</span>
					<span className="text-xl">Release date: {movie.release_date}</span>
					<span className="text-3xl">Rating: {movie.vote_average.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default page
