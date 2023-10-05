export const fetcher = async (endpoint, query, filters) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.MOVIEDB_API_KEY
		}
	}

	const res = await fetch(`https://api.themoviedb.org/3/${endpoint}`, options)

	return await res.json()
}