'use client'
import { BiSearchAlt2 } from 'react-icons/bi'

const SearchHeader = ({ className }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search Movie...'
        className='px-2 py-1 w-4/5 outline-none'
      />
      <button className='px-4'>
        <BiSearchAlt2
          size={20}
          className='text-gray-500 hover:text-black'
        />
      </button>
    </form>
  )
}

export default SearchHeader
