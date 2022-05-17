import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { Gear } from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
background-color: black;
height:400vh;
position: relative;
display: flex;
align-items: center;


`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`
const Home = styled.div`
color:#fff;
justify-content: center;
position: fixed;
left: 50%;
transform: translate(-50%, 0);
top: 5em;


`

// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

    const ref = useRef(null);
    const gear = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (gear.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<Home>Home</Home>
<ParticleComponent theme='dark'/>
     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
<Rotate ref={gear}>
    <Gear width={80} height={80} fill={DarkTheme.text} />
</Rotate>

<BigTitle text="WORK" top='10%' right="20%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage
