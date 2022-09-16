import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../assets/api/req"


export const Cards =()=>{
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getList(setMovies)
    },[])

    return (
        <div>
            {movies.map((movie)=>{
                return <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster" id={movie.id}/>
                </div>
            })}
        </div>
    )
}