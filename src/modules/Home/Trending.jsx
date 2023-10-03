import Link from 'next/link'
import { trendings } from '@/utils/constant'

const Trending = () => {
  return (
    <div>
      <h2 className='text-[1.75rem] font-bold mb-2'>TOP TRENDING</h2>
      {trendings.slice(0, 6).map((t, i) => (
        <Link
          href={`/movie/${t.id}`}
          key={t.id}
        >
          <div className='border rounded-md mb-4 overflow-hidden'>
            <div className='flex flex-wrap'>
              <div className='w-1/3'>
                <img
                  src={`https://image.tmdb.org/t/p/w300${t.poster_path}`}
                  className='w-full h-full'
                  alt={t.title}
                />
              </div>
              <div className='w-2/3'>
                <div className='p-4'>
                  <h5 className='mb-2'>{t.title}</h5>
                  <p>
                    <small className='text-gray-500'>lượt xem: {t.popularity}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Trending