import Carousel from '@/modules/Home/Carousel'

export default function Home() {
  return (
    <main className='flex w-full h-full p-4'>
      <div className='w-full lg:w-8/12 relative'>
        <Carousel />
      </div>
      <div className='hidden lg:block lg:w-4/12'>Box 2</div>
    </main>
  )
}
