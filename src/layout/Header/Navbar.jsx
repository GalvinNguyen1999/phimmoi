'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navigations } from '@/utils/constant'
import axios from '@/utils/customAxios'
import { useRouter } from 'next/navigation'
const Navbar = ({ className }) => {
  const [genreList, setGenresList] = useState([])
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    axios.get('/3/genre/movie/list?language=en').then((data) => setGenresList(data))
  }, [])
  const router = useRouter()

  return (
    <nav className={`${className}`}>
      <div className='relative inline-block text-left'>
        <div>
          <button
            type='button'
            className='text-blue-500 font-medium px-4 hover:text-blue-900 uppercase'
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
            onClick={() => setIsShow((prev) => !prev)}
          >
            category
          </button>
        </div>
        <div
          className={`absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isShow ? 'block' : 'hidden'
          }`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div
            className='py-1'
            role='none'
          >
            {genreList?.genres?.map((genre) => (
              <button 
                key={genre.id}
                // href={`category/${genre.id}`}
                className='text-gray-700 block px-4 py-2 text-sm'
                role='menuitem'
                tabIndex={-1}
                onClick={() => {
                  router.push(`/category/${genre.id}`)
                  setIsShow(false)
                }}
              >
                {genre.name}
              </button >
            ))}
          </div>
        </div>
      </div>

      {navigations.map((n, i) => (
        <Link
          key={i}
          href={n.href}
          className='text-blue-500 font-medium px-4 hover:text-blue-900 uppercase'
        >
          {n.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
