import React from 'react'
import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
    return (
        <button className="transition opacity-0 rounded-full flex items-center p-4 bg-green-500 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 hover:scale-110">
            <FaPlay className='text-black' />
        </button>
    )
}

export default PlayButton