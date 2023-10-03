import Carousel from '@/modules/Home/Carousel'
import Movies from '@/modules/Home/Movies'
import Trending from '@/modules/Home/Trending'

export default function Home() {
  return (
    <main className='flex lg:gap-4 w-full h-full p-4 lg:max-w-[1280px] lg:mx-auto lg:mt-24 mt-11 md:mt-16'>
      <div className='w-full lg:w-9/12 relative'>
        <Carousel />
        <Movies />
      </div>
      <div className='hidden lg:block lg:w-3/12'>
        <Trending />
      </div>
    </main>
  )
}
