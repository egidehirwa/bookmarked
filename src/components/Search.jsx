import React from 'react'

function Search() {
  return (
    <>
        <form className="max-w-sm mx-auto">
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md">
                    <img src="./src/assets/magnifying-glass-solid.svg" alt="" width="15px" height="15px"/>
                </span>
                <input type="text" id="search" placeholder="Search Anime" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"/>
            </div>
        </form>
    </>
  )
}

export default Search