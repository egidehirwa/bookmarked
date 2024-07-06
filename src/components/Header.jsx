import React from 'react'

function Header() {
  return (
    <header className="h-10 flex justify-between items-center py-5">
      <div className="flex gap-1 items-center">
        <img src="./src/assets/bookmark-solid.svg" alt="" width="20px"/>
        <p className="font-bold">Bookmarked</p>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li className="px-4 py-1 bg-blue-500 text-white rounded-full cursor-pointer">Home</li>
          <li className="px-4 py-1 bg-blue-500 text-white rounded-full cursor-pointer">Bookmarked</li>
          <li className="px-4 py-1 bg-blue-500 text-white rounded-full cursor-pointer">Notes</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
