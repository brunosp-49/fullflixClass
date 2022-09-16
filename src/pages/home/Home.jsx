import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../assets/api/req"
import { Cards } from "../../components/cards/Cards"
import { Footer } from "../../components/footer/Footer"


export const Home =()=>{
    return (
        <div>
            <div>
                imagens
            </div>
            <div>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}
