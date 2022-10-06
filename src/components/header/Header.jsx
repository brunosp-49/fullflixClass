import { MainContainer } from "./HeaderStyle";


export function Header({title}){
    return(
        <MainContainer>
            <p>{title}</p>
        </MainContainer>
    )
}