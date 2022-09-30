import { useSelector } from "react-redux";
import { Footer } from "../../components/footer/Footer";


export default function Detail(){
    const state = useSelector((state)=> state.page.value2)
    return(
        <div>
            <div>
                {state.data.title}
            </div>
            <div>
                Detalhes
            </div>
            <Footer/>
        </div>
    )
}