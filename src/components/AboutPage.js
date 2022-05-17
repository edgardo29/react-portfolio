import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import UFO from '../assets/Images/ufo.png'


const Box = styled.div`
background-color: black;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const slideIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(0%);
} 
100% {
    opacity: 1;
    transform: translateY(100%);
`
const UFO_1 = styled.div`
position: absolute;
top: 20%;
right: 5%;
width: 30vw;
animation: ${slideIn} 4s ease, ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const UFO_2 = styled.div`
position: absolute;
top: 50%;
right: 2%;
width: 20vw;
animation: ${slideIn} 5s ease, ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Home = styled.div`
color:#fff;
justify-content: center;
position: fixed;
left: 50%;
transform: translate(-50%, 0);
top: 5em;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<Home>Home</Home>
<ParticleComponent theme='dark' />

        <UFO_1>
            <img src={UFO} alt="spaceman" />
        </UFO_1>
        <UFO_2>
            <img src={UFO} alt="spaceman" />
        </UFO_2>

        <Main>
        I am currently pursuing a degree in Computer Science at Oregon State University which I plan to finish by the end of 2022.
        <br /> <br/>
        When I am not busy with school studies, I enjoy turning creative ideas with limitless possibilities into rich and dynamic web experiences.
        <br/> <br/>
        "If at first you don’t succeed; call it version 1.0" -- Unknown
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
