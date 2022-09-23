import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../assets/api/req"
import { CardContainer, Grid } from "./CardsStyle"


export const Cards =()=>{
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getList(setMovies)
    },[])

    return (
        <Grid>
            {movies.map((movie)=>{
                return <CardContainer key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster" id={movie.id}/>
                    <div className="infoContainer" id={movie.id}>
                        <h4>Título: {movie.title}</h4>
                        <h4>Nota: {movie.vote_average}</h4>
                    </div>
                </CardContainer>
            })}
        </Grid>
    )
}