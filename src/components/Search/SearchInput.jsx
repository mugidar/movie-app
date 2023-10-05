'use client'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SearchResults from './SearchResults'

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<>
			<span className="relative rounded-lg bg-neutral-950/70 p-2 flex items-center gap-2 z-10">
				<SearchIcon />
				<input
					type="search"
					className="text-primary outline-none bg-transparent"
					placeholder="Search..."
					onChange={e => setSearchQuery(e.target.value)}
				/>
				{searchQuery.length > 0 && <SearchResults query={searchQuery} />}
			</span>
		</>
	)
}

export default SearchInput
