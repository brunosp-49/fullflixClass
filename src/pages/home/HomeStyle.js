import styled from "styled-components";
import background from "../../assets/images/background.png"

export const MainContainer = styled.div`
background-color: black;
font-family: 'Roboto', sans-serif;
font-size: 2vw;
height: fit-content;
min-height: 100vh;
`

export const Part1 = styled.div`
background-image: url(${background});
height: 100vh;
background-position: center;
background-size: cover;
`

export const Part2 = styled.div`
background-color: black;
height: 10vh;
color: #fff;
font-size: 4vh;
padding-left: 2vw;
`

export const Part3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
height: fit-content;
min-height: 90vh;
color: #fff;
`

// export const MainContainer = styled.div`
// background-color: black;
// height: 100vh;
// `
