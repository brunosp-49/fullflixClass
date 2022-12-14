import axios from "axios"

const key = "ac57c76aa7b66833535f4b4aabe014f6"

export const getList = (setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`)
    .then((response)=>{
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetail = (id, setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`)
    .then((response)=>{
        setState(response)
    }).catch((error)=>{
        console.log(error)
    })
}