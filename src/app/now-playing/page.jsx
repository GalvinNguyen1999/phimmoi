'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Movies from '@/modules/Home/Movies'

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('/3/movie/now_playing?language=en-US&page=undefined').then((data) => setMovies(data))
  }, [])
  return <Movies movies={movies} />
}

export default NowPlayingPage
