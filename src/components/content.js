
import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faEquals} from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import {Animated} from 'react-animated-css'
import Aos from 'aos'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-elastic-carousel'
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faUnity } from '@fortawesome/free-brands-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'

function Content(props) {

    useEffect = ()=>{
        Aos.init();
    };
    const [show,setShow] = useState(true)

    // const Card = ({number}) => <div className='w-full h-max bg-white rounded-2xl p-1' data-aos="fade-right" > 
    
    // <div className='W-full h-max p-3 font-reem text-2xl '>
    //                              <h1>
    //                              Semester 1
    //                              </h1>
                                 
    //                         </div>
    //                         <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
    //                             <div>
    //                             <h1 className='font-bold font-robot text-3xl'>
    //                             Slash the Math!
    //                             </h1>
    //                             <h2 className='text-sm font-semibold text-slate-500 font-robot'>
    //                                 Algorithm and Programming
    //                             </h2>
    //                             </div>
    //                             <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
    //                                 <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

    //                                 </FontAwesomeIcon>
    //                                 <h1>
    //                                     Mahadi Rafi W
    //                                 </h1>
    //                             </div>
                                
                                
    //                         </div>
    //                         <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl' >
    //                                 <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
    //                             </div>
    //                         <div>

    //                         </div>
    
    // {number}</div>

    const breakpoint = [{ width: 1, itemsToShow: 1 , pagination: false, arrows: false},
        { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false},
        { width: 850, itemsToShow: 3,itemsToScroll: 3   },
        ]
    
    const breakpoint2 = [{ width: 1, itemsToShow: 1 , pagination: false, arrows: false},
        { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false},
        { width: 850, itemsToShow: 2,itemsToScroll: 2   },
        ]
    
    return (
        
        <div className='bg-contentblack w-full min-h-fit flex mini:flex-row'>
            
            <div className='md:w-48 min-h-screen flex flex-col justify-center items-center bg-contentblack'>
                
            </div>

            <div className='w-full min-h-full bg-contentblack flex flex-col' id='Home' >

                <div className='w-full min-h-screen  flex flex-col justify-center'>


                <div className='w-1/2 h-64  flex flex-col ml-2 p-5 justify-between' data-aos="fade-up">
                <Animated animationIn="bounceInLeft" animationOut="fadeOutLeftBig" animationInDuration={1000} animationOutDuration={1000} isVisible={true} >
                        <h2 className='text-white font-robot text-2xl' >
                            Hi! I am Achmad Rijalu 
                        </h2>

                        <div className='text-white font-robot text-3xl font-black mt-4'>
                        <h1 className=''>
                            Informatics Student
                        </h1>
                        <h1>
                            Aiming to be a Fullstack Developer
                        </h1>
                        </div>
                        
                        <div className='flex flex-row mt-5 text-3xl'>
                            
                            <a href='https://www.linkedin.com/in/achmad-rijalu-a-9a105a205/' className='' target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform'></FontAwesomeIcon>
                            </a>    
                            <a href='https://www.instagram.com/achjaluwae/' className='' target="_blank">
                            <FontAwesomeIcon icon={faInstagram}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://github.com/AchmadRijalu' className='' target="_blank">
                            <FontAwesomeIcon icon={faGithub}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://discordapp.com/users/316909993326542848' className='' target="_blank">
                            <FontAwesomeIcon icon={faDiscord}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://www.facebook.com/achmad.arianindita/' className='' target="_blank">
                            <FontAwesomeIcon icon={faFacebook}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon> 
                            </a>
                        
                        
                        </div>
                        </Animated>
                    </div>
                </div>
                <div className='w-full min-h-screen bg-contentblack flex flex-col sm:mt-0 mini:mt-10 ' id='About'>
                    
                    <div className='w-full h-24  flex flex-col justify-center p-6'>
                        <h1 className='text-white text-4xl font-robot font-bold'>
                            About
                        </h1>
                    </div>
                    <div className='w-full md:h-3/4 flex flex-col bg-contentblack p-6 mini:items-center lg:items-start'>
                             <div className='mt-3'>
                             <p className='text-white text-xl font-robot font-medium'>
                             Hi, my name is Achmad Rijalu A. I am an Informatics student at Ciputra 
                            University and currently on 4th of bachelor's degree in computer science.
                            </p>
                             </div>
                            
                            <div className='mt-5'>
                            <p className='text-white text-xl font-robot font-medium '>
                            I have big interest in Web Development, Mobile , Artificial Intelligence 
                            and, Digital Marketing.  
                            </p>
                            </div>
                            <div className='mt-5'>
                            <p className='text-white text-xl font-robot font-medium'>
                            In the future, i will deploy all of my projects and documentation of the 
                            programming languages that used on it into this website. 
                            </p>
                            </div>

                            <div className='lg:w-full mini:min-fit h-full bg-contentblack flex lg:flex-row mini:flex-col mt-6 mini:justify-center mini:items-center lg:space-x-10 ' >
                            {/* <div className='w-1/4 h-full  flex flex-col justify-center items-center'>
                            <div onClick={()=> setShow(!show)} className='flex flex-row text-3xl cursor-pointer'>
                                <FontAwesomeIcon icon={faEquals} className='text-white transform delay-75'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faChevronRight} className='text-white'></FontAwesomeIcon>
                                </div>
                            </div> */}
                            <div className='lg:w-max h-full  flex flex-row bg-contentblack p-1 rounded-lg bg-opacity-20 shadow-sm drop-shadow-lg bg-clip-padding border-r-1 shadow-slate-50 ' >

                            <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} show={true}>
                            {
                                show?<div className=' h-full  flex sm:flex-row mini:flex-col p-3 ' >
                                
                                    
                                    <img src= {require('../images/profpic2.jpg')} className='mini:w-80 xl:w-custom h-full hover:animate-pulse transition-opacity hover:delay-150 delay-100 rounded-lg' data-aos = "fade-up"></img>
                                    
                                    <div className=' h-full  flex flex-col justify-center p-2 opacity-80' data-aos = "fade-up">
                                    
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                        <FontAwesomeIcon icon={faUser} className=''>

                                        </FontAwesomeIcon>
                                        <p className='ml-2'>
                                            : Achmad Rijalu Arianindita
                                        </p>
                                        </div>

                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faMars}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : Male
                                            </p>
                                        </div>
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faCalendar}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : 20 Years Old
                                            </p>
                                        </div>
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faCity}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : Surabaya
                                            </p>
                                        </div>
                                    
                                    </div>
                                   
                                </div>:null
                                  }  
                                  
                            </Animated>
                            </div>
                            <div className='lg:w-2/5  mini:mt-4 lg:mt-0  h-full flex flex-col  bg-contentblack lg:p-1  rounded-lg bg-opacity-20 shadow-sm drop-shadow-lg bg-clip-padding border-r-1 shadow-slate-50 ' >
                                <div className='w-full h-max  text-white font-robot flex justify-center p-2 text-2xl font-semibold  flex-row ' data-aos = "fade-up">
                                    <h1>
                                        Experience
                                    </h1>
                                </div>
                                <div className='mini:w-full h-full   p-5 font-robot font-medium ' data-aos = "fade-up">
                                    <ul className='text-white space-y-4 lg:text-xl mini:text-md'>
                                        <li>
                                            - 1st Place Cak Cilik Surabaya 2013
                                        </li>
                                        <li>
                                            - Security Division Libels Cup 2019
                                        </li>
                                        <li>
                                           - External Member of IMT Student Union UC 2021-2022
                                        </li>
                                        <li>
                                            - Inventory member of 8th NPLC 2021 IMT's Annual Event 
                                        </li>
                                        <li>
                                            - Head of marketing of 9th NPLC 2022 IMT's Annual Event
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                                
      
                    </div>
                </div>
                <div className='w-full min-h-screen flex flex-col mt-4'id="project">                  
                    <div className='w-full h-24   flex flex-col justify-center p-7'>
                        <h1 className='text-white text-4xl font-robot font-bold '>
                            Projects
                        </h1>
                    </div>
                    

                    <div className='min-w-full h-max flex flex-row space-x-4 '>

                        <Carousel breakPoints={breakpoint} className="gap-x-4" indicators={false} infiniteLoop={true}>


                        <div className='w-full h-max  bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 1
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Slash the Math!
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Algorithm and Programming
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl' >
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                </div>
                            
                                <div className='w-full h-max  flex justify-center mt-2 mb-2'>
                                <button className='p-3 sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700  flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://drive.google.com/file/d/1E9oeh3TJgqj7xwpCLJ747cBH8IhxRPzM/view?usp=sharing")}} type="button">
                                    <FontAwesomeIcon icon={faDownload} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      Download Application
                                    </h1>
                                  </span>
                                </button>
                            </div>

                            
                        
                        </div> 
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="2">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 2
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Heromart-Prototype
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Dicoding Dasar Pemrograman Web Final Submission
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 w-full'>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600 mr-3'>

                                    </FontAwesomeIcon>
                                    N/A
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                            <div className='w-full h-max  flex justify-center mt-2 mb-2'>
                                <button className='p-3 sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AchmadRijalu/Heromart-Prototype")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div> 
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="2">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 2
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                GaSe Game Seller
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Web Programming
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 w-full'>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Timothy ,
                                    </h1>
                                    <h1>
                                        Oey Darryl
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                            <div className='w-full h-max  flex justify-center mt-2 mb-2'>
                                <button className='p-3 sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AchmadRijalu/GaSe-Git-Hub")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div> 

                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="3">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 2
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                SHU Kita Semua
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Programming Technique
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W
                                    </h1>
                                </div>
                                  
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                            </div>
                            <div className='w-full h-max  flex justify-center mt-2 mb-2'>
                                <button className='p-3 sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/MakLo1337/SHUKitaSemua")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div>
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="3">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                FamsCard
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Web Development
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        N/A
                                    </h1>
                                </div>
                                  
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                            </div>
                            <div className='w-full h-max  flex justify-center mt-2 mb-2'>
                                <button className='p-3 sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AchmadRijalu/Family-Card-Website")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div>
                        <div className='w-full  bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="4">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Bio Up!(Web Version)
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Web Development
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    <h1>
                                        Alvin Gary,
                                    </h1>
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                    <img src= {require('../images/tailwind.png')} className='w-6 h-6'></img>
                                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                            </div>
                            
                            <div className='w-full h-max  flex flex-col items-center justify-center  mt-2 mb-2'>
                                <button className='p-3  sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AchmadRijalu/BioUp")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                                <button className='p-3  sm:bg-neutral-200 mt-3 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://bioup.my.id")}} type="button">
                                    <FontAwesomeIcon icon={faDesktop} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Website
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div>
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="5">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Bio Up!(Mobile Version)
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Mobile Application Development
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    <h1>
                                        Alvin Gary,
                                    </h1>
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                            </div>
                            <div className='w-full h-max  flex flex-col items-center justify-center  mt-2 mb-2'>
                                <button className='p-3  sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AlvinGary/BioUpAndroidApp")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                                <button className='p-3  sm:bg-neutral-200 mt-3 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://drive.google.com/file/d/1ShPasGsz-7iuXUdlGgB2fBGj-dk_fwbw/view?usp=sharing")}} type="button">
                                    <FontAwesomeIcon icon={faDownload} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      Download APK
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div>
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="6">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                TampolSquito
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Game Design
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faUnity}></FontAwesomeIcon>
                            </div>
                            
                            <div className='w-full h-max  flex flex-col items-center justify-center  mt-2 mb-2'>
                                <button className='p-3  sm:bg-neutral-200 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://github.com/AchmadRijalu/TampolSquitoGit")}} type="button">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      View Repository
                                    </h1>
                                  </span>
                                </button>
                                <button className='p-3  sm:bg-neutral-200 mt-3 sm:text-black sm:hover:text-white transition hover:ease-linear hover:duration-75 duration-75 transition-colors ease-linear sm:hover:bg-contentblack mini:bg-contentblack mini:text-white mini:hover:bg-zinc-700 min-w-1/2 flex flex-row justify-center items-center rounded-lg' onClick={(e) => {e.preventDefault(); window.open("https://drive.google.com/file/d/1_Qa6lUvEy07NTisVIQbZfRYiuM3l8N5m/view?usp=sharing")}} type="button">
                                    <FontAwesomeIcon icon={faDownload} className="text-lg"></FontAwesomeIcon>
                                  <span className='font-bold ml-2'>
                                      <h1>
                                      Download Code
                                    </h1>
                                  </span>
                                </button>
                            </div>
                        
                        </div>

                        </Carousel>
                    </div>
                 <div className='min-w-full h-full '>

                    <div className='w-full h-24   flex flex-col justify-center p-7 bg-contentblack'>
                        <h1 className='text-white text-4xl font-robot font-bold'>
                            Certificates        
                        </h1>
                    </div>
                    <div className='w-full h-full '>
                        <Carousel breakPoints={breakpoint2} className="gap-x-4" indicators={false} infiniteLoop={true}>


                        <div className='w-full h-max   rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/dicoding1st.JPG')} className='hover:animate-pulse'>
                                
                                </img>
                                
                            </div>
                            <div className='w-full h-full flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://www.dicoding.com/certificates/07Z655LG2XQR")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                            
                        
                        </div> 
                        <div className='w-full h-max  rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/dicoding2nd.jpg')}>
                                
                                </img>
                               
                                
                            </div>
                            <div className='w-full h-full flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://www.dicoding.com/certificates/KEXL30K3WPG2")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                            
                        
                        </div> 
                        <div className='w-fullh-max  rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/kagglePhyton.png')}>
                                
                                </img>
                                
                            </div>
                            <div className=' flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://www.kaggle.com/learn/certification/achmadrijalua/python")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                        
                        </div> 
                        <div className='w-full h-max  rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/dicoding3rd.jpg')}>
                                
                                </img>
                                
                                
                            </div>
                            <div className='  flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://www.dicoding.com/certificates/NVP715GQVPR0")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                        
                        </div> 
                        <div className='w-full h-max  rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/dicoding4th.jpg')}>
                                
                                </img>
                                
                                
                            </div>
                            <div className='w-full h-full flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://www.dicoding.com/certificates/RVZK1E97MPD5")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                        
                        </div> 
                        
                        <div className='w-full h-max  rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            
                            <div className=' p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <img src={require('../images/nonAcademic.png')}>
                                
                                </img>
                                
                                
                            </div>
                            <div className='w-full h-full flex flex-row justify-center p-3'>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                             type='button'
                            onClick={(e) => { e.preventDefault(); window.open("https://drive.google.com/file/d/1vDPbPvLvHi27DuDPgSQON97Ljl16npWY/view?usp=sharing")}} >
                                <span class="relative sm:px-5 sm:py-2.5 mini:px-3 mini:py-3 transition-all ease-in duration-75 font-robot bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Certificate
                                </span>
                            </button>
                            </div>
                        
                        </div> 

                        
                        </Carousel>
                    </div>

                 </div>   
                
                
            </div>
            <div className='mini:w-full mini:min-h-screen  flex flex-col p-4 '>                  
                <div className='w-full h-24   flex flex-col justify-center p-7  ' >
                    <h1 className='text-white text-4xl font-robot font-bold' id='skills'>
                            Skills
                    </h1>
                </div>
                <div className='w-full h-full bg-contentblack flex flex-col p-5' >
                    <div className='w-full h-16  flex flex-col justify-center items-center sm:mb-0 mini:mb-5'>
                            <h1 className='text-white font-reem font-semibold tracking-wide sm:text-xl mini:text-lg'>
                               I have an experience in develop some applications with programming languages, Markup, StyleSheets, and Frameworks.
                            </h1>
                    </div>
                    <div className='w-full h-full flex grid grid-flow-cols xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mini:justify-center mini:items-center  md:grid-cols-2 gap-5 p-2 mt-4' data-aos="fade-down">
                        <div className='p-4'>
                        <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/htmlpng.png')} className=''>
                                </img>
                            </div>
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    HTML 5
                                 </h1>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                        <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/csspng.png')} className=''>
                                </img>
                            </div>
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    CSS 3
                                 </h1>
                                </div>
                            </div> 
                        </div>

                        <div className='p-4'>
                        <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/jspng.png')} className='w-full h-full'>
                            </img>
                            </div>
                            
                            <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    Javascript
                                 </h1>
                                </div>
                            </div>
                        </div>
                           
                        <div className='p-4'>
                        <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/javapng.png')} className='w-full h-full'>
                            </img>
                            </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold '>
                                 <h1>
                                    Java
                                 </h1>
                                </div>
                            </div>
                        </div>
                        <div className='p-4' >
                        <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/phppng.png')} className='w-full h-full'>
                            </img>
                            </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    PHP
                                 </h1>
                                 
                                </div>
                            </div>
                            
                        </div>
                            
                        <div className='p-4'>
                            <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                                <div className='w-full'>
                                    <img src={require('../images/laravelpng.png')} className='w-full h-full'>
                                    </img>
                                </div>
                                <div className='w-full h-max p-1 mt-4 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    Laravel
                                 </h1> 
                            </div>
                            </div>
                             
                        </div>

                           <div className='p-4'>
                           <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/tailwindpng.png')} className='w-full h-full'>
                            </img>
                            </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    Tailwind CSS
                                 </h1>
                                </div>
                            </div>
                           </div>
                            
                           <div className='p-4'>
                           <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                            <div className='w-full'>
                            <img src={require('../images/mysqlpng.png')} className='w-full h-full'>
                            </img>
                            </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    Mysql
                                 </h1>
                                </div>
                            </div>   
                            </div>
                            <div className='p-4'>
                            <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                                <div className='w-full'>
                                    <img src={require('../images/reactpng.png')} className='w-full h-full'>
                                    </img>
                                </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    React
                                 </h1>
                                </div>
                            </div>
                            
                            </div>
                            <div className='p-4'>
                            <div className='w-60 h-60  flex flex-col ml-3 bg-white p-2 rounded-xl'>
                                <div className='w-full'>
                                    <img src={require('../images/csharppng.png')} className='w-full h-full'>
                                    </img>
                                </div>
                            
                                <div className='w-full h-max p-1 mt-5 bg-contentblack text-white font-robot text-center font-bold'>
                                 <h1>
                                    C#
                                 </h1>
                                </div>
                            </div>
                            
                            </div>
                            
                            
                            
                            
                            
                            
                           
                            
                            
                    </div>
                </div>
                
            </div>
        </div>
            
            
     </div>
        
    );
}

export default Content