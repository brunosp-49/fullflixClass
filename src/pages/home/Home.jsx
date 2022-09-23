import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../assets/api/req"
import { Cards } from "../../components/cards/Cards"
import { Footer } from "../../components/footer/Footer"
import { MainContainer, Part1, Part2, Part3 } from "./HomeStyle"


export const Home =()=>{
    return (
        <MainContainer>
            <Part1 />
            <Part2>
                <p>Filmes Populares</p>
            </Part2>
            <Part3>
                <Cards/>
            </Part3>
            <Footer/>
        </MainContainer>
    )
}
