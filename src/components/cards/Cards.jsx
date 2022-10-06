import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getDetail, getList } from "../../assets/api/req"
import { getMovieDetails, goToDetail } from "../../assets/redux/counterSlice"
import { CardContainer, Grid } from "./CardsStyle"


export const Cards =()=>{
    const [movies, setMovies] = useState([])
    const [details, setDetails]= useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        getList(setMovies)
    },[])


    useEffect(()=>{
        dispatch(getMovieDetails(details))
    },[details])

    const onHoverDetail = (e) =>{
        getDetail(e.target.id, setDetails)
    }

    return (
        <Grid>
            {movies.map((movie)=>{
                return <CardContainer key={movie.id} id={movie.id} onClick={()=>dispatch(goToDetail())} to="/detail" onMouseEnter={onHoverDetail}>
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