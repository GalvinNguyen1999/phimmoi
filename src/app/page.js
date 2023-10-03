import Carousel from '@/modules/Home/Carousel'
import Movies from '@/modules/Home/Movies'

export default function Home() {
  return (
    <main className='flex lg:gap-4 w-full h-full p-4 lg:max-w-[1280px] lg:mx-auto lg:mt-24 mt-11 md:mt-16'>
      <div className='w-full lg:w-8/12 relative'>
        <Carousel />
        <Movies />
      </div>
      <div className='hidden lg:block lg:w-4/12'>Box 2</div>
    </main>
  )
}
