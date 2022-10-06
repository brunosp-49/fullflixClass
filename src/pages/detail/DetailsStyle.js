import styled from "styled-components";

export const MainContainer = styled.div`
img{
    width: 100%;
    height: 100%;
}
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 35% 65%;
`
export const RigthSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2vw;
p{
    font-size: 1.5vw;
}
a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 14vw;
    border: 0;
    border-radius: 1.5vw;
    font-size: 1.5vw;
    background-color: #c62924;
    color: #fff;
    text-decoration: none;
    :hover{
        opacity: 0.9;
    }
}
`
// export const MainContainer = styled.div`
// background-color: black;
// height: 100vh;
// `
// export const MainContainer = styled.div`
// background-color: black;
// height: 100vh;
// `