import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goToIndex } from "../../assets/redux/counterSlice";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Grid, MainContainer, RigthSide } from "./DetailsStyle";


export default function Detail(){
    const dispatch = useDispatch()
    const state = useSelector((state)=> state.page.value2)
    return(
        <MainContainer>
            <Header title={state.data.title}/>
            <Grid>
                <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`}/>
                <RigthSide>
                    <p><b>Titulo:</b> {state.data.title}</p>
                    <p><b>Sinopse:</b> {state.data.overview}</p>
                    <p><b>Data de lançamento:</b> {state.data.release_date}</p>
                    <p><b>Nota:</b> {state.data.vote_average}</p>
                    <Link to="/" onClick={()=>dispatch(goToIndex())}>Voltar para a home</Link>
                </RigthSide>
            </Grid>
            <Footer/>
        </MainContainer>
    )
}