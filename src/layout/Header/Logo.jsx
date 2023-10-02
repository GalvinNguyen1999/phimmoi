import { BiMoviePlay } from 'react-icons/bi'

const Logo = () => {
  return (
    <div className='flex items-center gap-2 lg:w-1/6'>
      <BiMoviePlay
        size={32}
        className='text-blue-500 cursor-pointer'
      />
      <span className='text-blue-500 font-medium cursor-pointer'>Phim Mới</span>
    </div>
  )
}

export default Logo
