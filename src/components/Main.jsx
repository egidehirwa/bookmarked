import React from 'react'
import Search from './Search'

function Main() {
  return (
    <>
        <main className="min-h-fit py-6 bg-slate-200 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Search for your favorite Anime</h1>
            <Search></Search>
        </main>
    </>
  )
}

export default Main