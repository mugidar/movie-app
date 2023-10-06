export const fetcher = async (endpoint) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.MOVIEDB_API_KEY
		}
	}

	const res = await fetch(endpoint, options)

	return await res.json()
}