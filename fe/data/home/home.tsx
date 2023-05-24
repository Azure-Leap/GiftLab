import { HiOutlineSparkles } from 'react-icons/hi'
import {VscHome} from 'react-icons/vsc'
import {HiOutlineChatBubbleOvalLeftEllipsis} from 'react-icons/hi2'
import { FaHandSparkles } from 'react-icons/fa'
import {CgMoreVerticalAlt, CgProfile} from 'react-icons/cg'


export const dashboardCategory = [
    {
        icon : <VscHome/>,
        title : 'Home',
        tag : ''
    },
    {
        icon : <HiOutlineSparkles/>,
        title : 'Posts',
        tag : 'posts'
    },
    // {
    //     icon : <HiOutlineChatBubbleOvalLeftEllipsis/>,
    //     title : 'Messages',
    //     tag : 'messages'
    // },
    // {
    //     icon : <FaHandSparkles/>,
    //     title : 'Transactions',
    //     tag : 'transactions'
    // },
    {
        icon : <CgProfile/>,
        title : 'Profile',
        tag : 'profile'
    },
    
    
]
