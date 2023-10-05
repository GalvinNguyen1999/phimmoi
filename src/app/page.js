'use client'

import Carousel from '@/modules/Home/Carousel'
import Movies from '@/modules/Home/Movies'
export default function Home() {
  return (
    <main className='relative'>
        <Carousel />
        <Movies />
    </main>
  )
}
