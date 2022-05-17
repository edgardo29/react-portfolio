import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import HTML from '../assets/Images/html.png'
import NODE from '../assets/Images/node.png';
import REACT from '../assets/Images/react.png';
import JAVASCRIPT from '../assets/Images/javascript.png';
import MONGO from '../assets/Images/mongo.png';
import CSS from '../assets/Images/css.png';
import FIREBASE from'../assets/Images/firebase.png'
import EXPRESS from'../assets/Images/express.png'
import PYTHON from'../assets/Images/python.png';
import SQL from'../assets/Images/sql.png'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'

let Box = styled.div`
background-color: black;
min-height: 100vh;
`

const Main = styled.div`
margin: 0 auto;
max-width: 1170px;
padding:2rem 1rem;
position:relative;

.icon {
         width: 150px;
         height: 150px;
         object-fit: contain;}
         
.grid-wrapper{
    --auto-grid-min-size: 12rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 font-family: 'Montserrat', sans-serif;

  }
  .grid-wrapper li{
    border: 2px solid ${props => props.theme.text};
    color: #ffffff;
    font-size: 24px;
    list-style-type: none;
    padding: 3rem 1rem;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 600;
    border: 2px solid ${props => props.theme.text};
     box-shadow: 0 10px 10px -5px;
     &:hover{
         transform: scale(1.1, 1.1);
         transition: transform 0.5s ease;
         color: ${props => props.theme.body};
         background-color: ${props => props.theme.text};
      
     }
  }
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
text-align: center;

padding-top: 220px;
font-family: 'Press Start 2P', cursive;

${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const Home = styled.div`
color:#fff;
justify-content: center;
position: fixed;
left: 50%;
transform: translate(-50%, 0);
top: 5em;


`

const MySkillsPage = () => {
    return (
   <ThemeProvider theme={lightTheme}>     
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<Home>Home</Home>
<ParticleComponent theme='light' />

<Description>|-----Technologies that I have worked with-----|</Description>
            <Main>
                    <ul className='grid-wrapper'>
                    <li className='box'>
                        <img className='icon' src={HTML} alt="HTML icon" />
                        <p className=''>HTML</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={CSS} alt="HTML icon" />
                        <p className=''>CSS</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={JAVASCRIPT} alt="HTML icon" />
                        <p className=''>JAVASCRIPT</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={REACT} alt="HTML icon" />
                        <p className=''>REACT</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={NODE} alt="HTML icon" />
                        <p className=''>NODE</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={FIREBASE} alt="HTML icon" />
                        <p className=''>FIREBASE</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={MONGO} alt="HTML icon" />
                        <p className=''>MONGO</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={EXPRESS} alt="HTML icon" />
                        <p className=''>EXPRESS</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={PYTHON} alt="HTML icon" />
                        <p className=''>PYTHON</p>
                    </li>
                    <li className='box'>
                        <img className='icon' src={SQL} alt="HTML icon" />
                        <p className=''>SQL</p>
                    </li>
                    </ul>
                    
                
                    

            


            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        
  </Box>
        </ThemeProvider>
      
    )
}

export default MySkillsPage




// let Box = styled.div`
// background-color: black;
// min-height: 100vh;
// `

// const Main = styled.div`
// color: ${props => props.theme.text};
// position: relative;
// margin: auto;
// width: 750px;
// padding-top:50px ;
// padding-bottom: 50x;
// cursor: pointer;
// display: grid;

// justify-content:center;
// text-align: center;

// grid-template-columns: repeat(5, 1fr);
// grid-gap: 20px;
// .box{
//     width: 180px;
//     height: 230px;
//     border: 2px solid ${props => props.theme.text};
//     box-shadow: 0 10px 10px -5px;
    // &:hover{
    //     transform: scale(1.2, 1.2);
    //     transition: transform 0.5s ease;
    //     color: ${props => props.theme.body};
    //     background-color: ${props => props.theme.text};
      
//     }
// }

// .icon {
//     width: 150px;
//     height: 150px;
//     object-fit: contain;
//     padding-top:20px ;
//     padding-bottom: 20px;
    
    
    
// }

// @media (max-width: 800px) {
    
//     color: ${props => props.theme.text};
//     width: 550px;
//     padding-top:50px ;
//     padding-bottom: 50px;
//     cursor: pointer;
//     display: grid;
//     justify-content:center;
//     text-align: center;
//     grid-template-columns: repeat(5, 1fr);
//     grid-gap: 20px;
//     .box{
//         width: 110px;
//         height: auto;
//         border: 2px solid ${props => props.theme.text};
//         &:hover{
//             color: ${props => props.theme.body};
//             background-color: ${props => props.theme.text};
//         }
//     }
    

//     .icon {
//         width: 80px;
//         height: 80px;
//         object-fit: contain;
        
//     }
// }

// @media (max-width: 600px) {
//     color: ${props => props.theme.text};
//     margin: auto;
//     width: 400px;
//     padding-top: 50px;
//     padding-bottom: 50px;
//     cursor: pointer;
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-gap: 20px;
//     .box{
//         width: auto;
//         height: auto;
//         border: 2px solid ${props => props.theme.text};
//         &:hover{
//             color: ${props => props.theme.body};
//             background-color: ${props => props.theme.text};
//         }
//     }
    

//     .icon {
//         width: 40px;
//         height: 40px;
//         object-fit: contain;
        
//     }
// }


// `



// const Title = styled.h2`
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: calc(1em + 1vw);
// ${Main}:hover &{
//     &>*{
//         fill:${props => props.theme.body};
//     }
// }
// &>*:first-child{
// margin-right: 1rem;
// }
// `

// const Description = styled.div`
// color: ${props => props.theme.text};
// font-size: calc(0.5em + 0.3vw);
// text-align: center;

// padding-top: 220px;
// font-family: 'Press Start 2P', cursive;

// ${Main}:hover &{
   
//         color:${props => props.theme.body};
    
// }
// strong{
//     margin-bottom: 1rem;
//     text-transform: uppercase;
// }
// ul,p{
//     margin-left: 2rem;
// }
// `

// const MySkillsPage = () => {
//     return (
//    <ThemeProvider theme={lightTheme}>     
// <Box>

// <LogoComponent theme='light'/>
// <SocialIcons theme='light'/>
// <PowerButton />
// <ParticleComponent theme='light' />

// <Description>|-----Technologies that I have worked with-----|</Description>
//             <Main>
                    
//                     <div className='box'>
//                         <img className='icon' src={HTML} alt="HTML icon" />
//                         <p className=''>HTML</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={CSS} alt="HTML icon" />
//                         <p className=''>CSS</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={JAVASCRIPT} alt="HTML icon" />
//                         <p className=''>JAVASCRIPT</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={REACT} alt="HTML icon" />
//                         <p className=''>REACT</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={NODE} alt="HTML icon" />
//                         <p className=''>NODE</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={FIREBASE} alt="HTML icon" />
//                         <p className=''>FIREBASE</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={MONGO} alt="HTML icon" />
//                         <p className=''>MONGO</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={EXPRESS} alt="HTML icon" />
//                         <p className=''>EXPRESS</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={PYTHON} alt="HTML icon" />
//                         <p className=''>PYTHON</p>
//                     </div>
//                     <div className='box'>
//                         <img className='icon' src={SQL} alt="HTML icon" />
//                         <p className=''>SQL</p>
//                     </div>
            
                    
                
                    

            


//             </Main>

//             <BigTitle text="SKILLS" top="80%" right="30%" />

        
//   </Box>
//         </ThemeProvider>
      
//     )
// }

// export default MySkillsPage