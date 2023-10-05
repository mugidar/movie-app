import { NextResponse } from 'next/server'

export const fetcher = async endpoint => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.MOVIEDB_API_KEY
		}
	}

	const res = await fetch(`https://api.themoviedb.org/3/${endpoint}`, options)

	return res.json()
}

export const GET = async () => {
	const movies = await fetcher('discover/movie')

	return new NextResponse(JSON.stringify(movies), { status: 200 })
}
