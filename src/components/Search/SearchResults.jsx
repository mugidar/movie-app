'use client'
import './searchResults.css'
import Image from 'next/image'
import React from 'react'

const SearchResults = () => {
	return (
		<div className="searchResults absolute cursor-pointer   overflow-y-scroll scroll- max-h-[300px] rounded-b  text-black bottom-0 left-0 translate-y-[100%] w-full bg-white">
			{[1, 4, 24, 42, 41, , 4, 4, 4, 441].map((item, index) => (
				<>
					<div key={index} className="hover:opacity-50  cursor-pointer justify-around transition p-2 gap-2 h-[50px] w-full flex items-center">
						<div className="relative min-h-[40px]  min-w-[40px]">
							<Image fill alt="" src={'/images/film_preview.png'} />
						</div>
						<div className="overflow-hidden flex items-start flex-col">
							<h1 className="font-bold">Text</h1>
							<p className="text-whitespace-nowrap w-full  text-ellipsis overflow-hidden">
								In 1956 France,
							</p>
						</div>
						<div className="font-bold">6.9</div>
					</div>
				</>
			))}
		</div>
	)
}

export default SearchResults
