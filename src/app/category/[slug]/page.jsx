'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Movies from '@/modules/Home/Movies'

export default function CategoryPage({ params }) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios
      .get(
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=undefined&sort_by=popularity.desc&with_genres=${params.slug}`,
      )
      .then((data) => setMovies(data))
  }, [])

  return <Movies movies={movies} />
}
/* 
> Click 1 item -> link tới đường dẫn category/slug 
*/
