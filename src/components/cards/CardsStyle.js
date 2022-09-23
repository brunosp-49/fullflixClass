import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
height: 100%;
width: 100%;
border: 1px solid #fff;
border-radius: 5px;
.infoContainer{
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: 20%;
    align-self: center;
    font-size: 2vh;
}
:hover{
    cursor: pointer;
    border: 1px solid #e50914;
}
img{
    width: 100%;
    height: 80%;
}
`
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-content: center;
align-items: center;
min-height: 20vh;
padding: 10vh 0;
width: 80%;
gap: 3vw;
`



// export const MainContainer = styled.div`
// background-color: black;
// height: 100vh;
// `
// export const MainContainer = styled.div`
// background-color: black;
// height: 100vh;
// `