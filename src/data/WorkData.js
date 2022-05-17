import CHAT from'../assets/Images/chat.png'
import FITNESS from'../assets/Images/fitness-logo.jpeg';
import NOTES from'../assets/Images/notes.png';
import BUDGET from'../assets/Images/budget_cover.jpeg';


const Image_1 = () => {
    return (
        <div >
            <img src={FITNESS} alt="" style={{borderRadius:'50%', height: '150px', width: '150px', objectFit: 'cover'}} />
        </div>
    )
}

const Image_2 = () => {
    return (
        <div>
            <img src={CHAT} alt="" style={{borderRadius:'50%', height: '150px', width: '150px', objectFit: 'cover'}}/>
        </div>
    )
}
const Image_3 = () => {
    return (
        <div>
            <img src={NOTES} alt="" style={{borderRadius:'50%', height: '150px', width: '150px', objectFit: 'cover'}}/>
        </div>
    )
}
const Image_4 = () => {
    return (
        <div>
            <img src={BUDGET} alt="" style={{borderRadius:'50%', height: '150px', width: '150px', objectFit: 'cover'}} />
        </div>
    )
}
export const Work = [
    {
        id:1,
        name:"StrongLad",
        image: <Image_1/>,
        description:"IOS application in development that allows the user to keep track of their workout routine by logging in their exercises into templates in order to stay organized anywhere on the go.",
        tags:[""],
        
        demo:"https://github.com/edgardo29/StrongLad/blob/main/README.md",
        github:"https://github.com/edgardo29/StrongLad"
    },
    {
        id:2,
        name:"LetsChat",
        image: <Image_2/>,
        description:"This web app allows users to connect with each other via text messages.  Users are able to change their own default picture,receive new message notifications, send text/image messages, and see when friends or family members are online.",
        tags:[""],
        
        demo:"https://lets-chat-six.vercel.app/",
        github:"https://github.com/edgardo29/Lets-Chat"
        
    },
    {
        id:3,
        name:"Notes App",
        image: <Image_3/>,
        description:"This note application allows the user to quickly add, search, and even save notes to local storage so it's always available at their disposal. " ,
        tags:[""],
        
        demo:"https://notes-app-123.herokuapp.com/",
        github:"https://github.com/edgardo29/Notes-App"
    },
    {
        id:4,
        name:"Budget Tracker",
        image: <Image_4/>,
        description:"This application helps you stay on top of your finances so you can better see where your capital is going. It's a great management tool to keep track of your income and expenses on the go..",
        tags:[""],
        
        demo:"https://edgardo29.github.io/Budget-Tracker/",
        github:"https://github.com/edgardo29/Budget-Tracker"
       
    }
    
  
] 