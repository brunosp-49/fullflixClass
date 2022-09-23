import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../assets/api/req"
import { MainContainer } from "./FooterStyle"


export const Footer =()=>{
    return (
        <MainContainer>
            <p>FULLFLIX ® 2022, Todos os direitos reservados. |</p>
        </MainContainer>
    )
}