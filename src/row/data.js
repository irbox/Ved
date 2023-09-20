import YT from '../assets/svg/dashboard/YT.svg'
import Insta from '../assets/svg/dashboard/Insta.svg'
import FB from '../assets/svg/dashboard/FB.svg'
import Book from '../assets/svg/dashboard/Book.svg'
import Shirt from '../assets/svg/yodha/Shirt.svg'
import Note from '../assets/svg/cart/Note.svg'
import Date from '../assets/svg/cart/Date.svg'
import Code from '../assets/svg/cart/Code.svg'
import Wallet from '../assets/svg/cart/Wallet.svg'
import Bag from '../assets/svg/more/Bag.svg'
import Link from '../assets/svg/more/Link.svg'
import Send from '../assets/svg/more/Send.svg'
import Invite from '../assets/svg/more/Invite.svg'
import User from '../assets/svg/more/User.svg'
import Call from '../assets/svg/more/Book.svg'
import Info from '../assets/svg/more/Info.svg'
import Go from '../assets/svg/more/Go.svg'
import Eye from '../assets/svg/more/Eye.svg'
import Edit from '../assets/svg/more/Edit.svg'
import Clock from '../assets/svg/donation/Clock.svg'
import Group from '../assets/svg/donation/Group.svg'

import { Image } from 'react-native'
import { HEIGHT , WIDTH} from '../theme/typography'


export const dashboard = [
    {
        'name' : 'Youtube',
        'image' :<YT />,
    },
    {
        'name' : 'Instagram',
        'image' :<Insta />,
    },
    {
        'name' : 'Spotify',
        'image' :<YT />,
    },
    {
        'name' : 'Facebook',
        'image' :<FB />,
    },
    {
        'name' : 'Instagram',
        'image' :<Insta />,
    },
    
]

// export const More = [
//     {
//         'name' : 'My Orders',
//         'image' :<Bag />,
//         'imager' :<Go />,
//         'screen' : 'HistoryTabbar'
//     },
//     {
//         'name' : 'Profile',
//         'image' :<User />,
//         'imager' :<Go />,
//         'screen' : 'ProfileSettings'
//     },
//     {
//         'name' : 'Book a Consultation Call',
//         'image' : <Call />,
//         'imager':<Go />,
//         'screen' : 'AboutScreen'
//     },
//     {
//         'name' : 'Help us spread Dharma',
//         'image' :<Send />,
//         'imager' :<Go />,
//         'screen' : 'AboutScreen'
//     },
//     {
//         'name' : 'Invite Us',
//         'image' :<Invite />,
//         'imager' :<Go />,
//         'screen' : 'DashboardScreen'
//     },
//     {
//         'name' : 'Join Pandav Sena',
//         'image' :<Link />,
//         'imager' :<Go />,
//         // 'screen' : 'AboutScreen'
//     },
//     {
//         'name' : 'About Veducation',
//         'image' :<Info />,
//         'imager' :<Go />,
//         'screen' : 'AboutScreen'
//     },
    
// ]

export const profile = [
    {
        'name' : 'Edit Profile',
        'image' :<Edit />,
        'screen' : 'EditProfile',
    },
    // {
    //     'name' : 'Change Password',
    //     'image' :<Eye />,
    //     // 'screen' : '',
    // },
]

export const bookLanguage = [
    {
        'lan' : 'English',
    },
    {
        'lan' : 'Hindi',
    },
]

export const upcomingBooks = [
    {
        'title' : 'Upcoming Books',
        'content' :'A Book with the knowledge that all the Sanatani Hindu'
    },
    {
        'title' : 'Upcoming Books',
        'content' :'A Book with the knowledge that all the Sanatani Hindu'
    },
    {
        'title' : 'Upcoming Books',
        'content' :'A Book with the knowledge that all the Sanatani Hindu'
    },
]

export const otherVersions = [
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
    {
        'title' : 'English Bhagvad -As It Is',
        'author' :'by Srila Prabhupada'
    },
]

export const YourBookList = [
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},
    {'image' : require('../assets/images/Image.png')},

]

export const slider = [
    {
        'image' :<Image source={require('../assets/images/slide.png')} style={{height:HEIGHT/100*23,width:WIDTH/100*86,marginLeft:10,}}/>,
    },
    {
        'image' :<Image source={require('../assets/images/slide.png')} style={{height:HEIGHT/100*23,width:WIDTH/100*86,marginLeft:10,}}/>,
    },
    {
        'image' :<Image source={require('../assets/images/slide.png')} style={{height:HEIGHT/100*23,width:WIDTH/100*86,marginLeft:10,}}/>,
    },
    {
        'image' :<Image source={require('../assets/images/slide.png')} style={{height:HEIGHT/100*23,width:WIDTH/100*86,marginLeft:10,}}/>,
    },
]

export const productList = [
    {
        'image':<Book />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'by Prateeik Prajapati',
        'star' : 5,
        'count' :'34',
    },
    {
        'image':<Book />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'by Prateeik Prajapati',
        'star' : 2,
        'count' :'60',
    },
    {
        'image':<Book />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'by Prateeik Prajapati',
        'star' : 5,
        'count' :'94',
    },
    {
        'image':<Book />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'by Prateeik Prajapati',
        'star' : 4,
        'count' :'50',
    },
    {
        'image':<Book />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'by Prateeik Prajapati',
        'star' : 2,
        'count' :'94',
    },
]


export const productList1 = [
    {
        'image':<Shirt />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'Cotton T-shirt',
        'star' : 5,
        'count' :'34',
    },
    {
        'image':<Shirt />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'Cotton T-shirt',
        'star' : 2,
        'count' :'60',
    },
    {
        'image':<Shirt />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'Cotton T-shirt',
        'star' : 5,
        'count' :'94',
    },
    {
        'image':<Shirt />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'Cotton T-shirt',
        'star' : 4,
        'count' :'50',
    },
    {
        'image':<Shirt />,
        'name' : 'B.O.S.S : Basics of Sanatan Sanskriti',
        'author' : 'Cotton T-shirt',
        'star' : 2,
        'count' :'94',
    },
]


export const YodhaStore = [
    {
        'cate' : 'Gada - Mudgals'
    },
    {
        'cate' : 'T-shirts - Hoodies'
    },
    {
        'cate' : 'Sadhna Stuff'
    },
]

export const cartList = [
    {
        'name' : ' Veducation T Shirt - Mens Tshirt Pure Black',
        'price' : "$ 25.00",
        'count' : '01'
    },
    {
        'name' : ' Veducation T Shirt - Mens Tshirt Pure Black',
        'price' : "$ 26.00",
        'count' : '04'
    },
    {
        'name' : ' Veducation T Shirt - Mens Tshirt Pure Black',
        'price' : "$ 30.00",
        'count' : '01'
    },
]

export const confirmList = [
    // {
    //     'name' : ' Veducation T Shirt - Mens Tshirt...',
    //     'price' : "$ 25.00",
    //     'count' : '01'
    // },
    // {
    //     'name' : ' Veducation T Shirt - Mens Tshirt...',
    //     'price' : "$ 26.00",
    //     'count' : '04'
    // },
]


export const CourseList = [
    {
        'name' : 'Brahmacharya',
        'duration' : "4h 16 Mins",
        'lesson' : '12 Lessons',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    },
    {
        'name' : 'Brahmacharya',
        'duration' : "4h 16 Mins",
        'lesson' : '12 Lessons',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    },
    {
        'name' : 'Brahmacharya',
        'duration' : "4h 16 Mins",
        'lesson' : '12 Lessons',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    },
    {
        'name' : 'Brahmacharya',
        'duration' : "4h 16 Mins",
        'lesson' : '12 Lessons',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    },
    {
        'name' : 'Brahmacharya',
        'duration' : "4h 16 Mins",
        'lesson' : '12 Lessons',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    },
]

export const confirmationDetails = [
    {
        'title' : ' Order code:',
        'content' :'#85764564674646',
        'image' : <Code />
    },
    {
        'title' : ' Date:',
        'content' :'February 19, 2021',
        'image' : <Date />
    },
    {
        'title' : ' Total:',
        'content' :'$1,345.00',
        'image' : <Note />
    },
    {
        'title' : ' Payment method:',
        'content' :'Cash on Delivery',
        'image' : <Wallet />
    },
]

export const detailTab = [
    {
        'title' : ' Description',
    },
    {
        'title' : ' Reviews',
    },
]

export const coveredTopics = [
    {
        'lesson' : 'Lesson 01: ',
        'title' :'Principles of Brahmacharya',
    },
    {
        'lesson' : 'Lesson 01: ',
        'title' :'Principles of Brahmacharya',
    },
    {
        'lesson' : 'Lesson 01: ',
        'title' :'Principles of Brahmacharya',
    },
    {
        'lesson' : 'Lesson 01: ',
        'title' :'Principles of Brahmacharya',
    },
]

export const lessonList = [
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
    {
        'time' : '09:45',
        'title' :'Lesson 01: Brahmacharya - The basics you need to understand',
    },
]

export const courseList = [
    {
        'title' : ' Brahmacharya',
        'count' :'64k',
        'star':5,
    },
]

export const genderList = [
    {
        'gender' : ' Male'
    },
    {
        'gender' : ' Female'
    },
]

export const donation = [
    {
        'name':'Building Gaushala for Hundreds of Gaumatas in Mayapur, Kolkata',
        'total':'$ 300,000',
        'got':'$ 50,568'
    },
    {
        'name':'Building Gaushala for Hundreds of Gaumatas in Mayapur, Kolkata',
        'total':'$ 300,000',
        'got':'$ 50,568'
    },
    {
        'name':'Building Gaushala for Hundreds of Gaumatas in Mayapur, Kolkata',
        'total':'$ 300,000',
        'got':'$ 50,568'
    },
]

export const donationFeatures = [
    {
        'name':'84 days',
        'image':<Clock/>
    },
    {
        'name':'24,000 Backers',
        'image':<Group/>
    },
]

export const Bookcontent = 
    {
        'content':'Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industrys st&ard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, & more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."\n" Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industrys st&ard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
    }

    export const bannerList = [
        {
            'image': require('../assets/images/slide.png')
        },
        {
            'image': require('../assets/images/slide.png')
        },
        {
            'image': require('../assets/images/slide.png')
        },
        {
            'image': require('../assets/images/slide.png')
        },
    ]   

    export const More = [
        {
            'name' : 'My Orders',
            'image' :<Bag height={22} width={22}/>,
            'imager' :<Go />,
            'screen' : 'HistoryTabbar'
        },
        {
            'name' : 'Profile',
            'image' :<User  height={22} width={22}/>,
            'imager' :<Go />,
            'screen' : 'ProfileSettings'
        },
        {
            'name' : 'Invite Us',
            'image' :<Invite  height={22} width={22}/>,
            'imager' :<Go />,
            'screen' : 'DashboardScreen'
        },
        {
            'name' : 'Book a Consultation Call',
            'image' : <Call  height={22} width={22}/>,
            'imager':<Go />,
            'screen' : 'AboutScreen'
        },
        {
            'name' : 'Help us spread Dharma',
            'image' :<Send  height={22} width={22}/>,
            'imager' :<Go />,
            'screen' : 'DonationScreen'
        },
        {
            'name' : 'Join Pandav Sena',
            'image' :<Link  height={22} width={22}/>,
            'imager' :<Go />,
            // 'screen' : 'AboutScreen'
        },
        {
            'name' : 'About Veducation',
            'image' :<Info  height={22} width={22}/>,
            'imager' :<Go />,
            'screen' : 'AboutScreen'
        },
        // {
        //     'name' : 'Logout',
        //     'image' :<Info />,
        //     'imager' :<Go />,
        //     'screen' : 'AboutScreen'
        // },
        
    ]