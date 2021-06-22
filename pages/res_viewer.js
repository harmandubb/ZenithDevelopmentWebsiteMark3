import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
//import Swiper from '../components/Res_Carousel'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Navigation, Pagination]);


export default function Res_Viewer() {
    const [carousel, setCarousel] = useState(false);

    return (
        <>

            <Nav />

            {carousel && <Swiper
                navigation
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >



                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen'>
                        <img class='object-cover' src="img/82_KingGeorge_Exterior.jpg"></img>
                        <div class="absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                King George Project
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Bringing modern and affordable residential <br></br> units to Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    King George and 82nd Ave
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhouse and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Coming 2023
                                </span>


                                <span>
                                    <a href="com_viewer.html">
                                        <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                            Explore
                                    </button>
                                    </a>
                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen'>
                        <img class='object-cover' src="img/Roof.jpg"></img>
                        <div class="absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                King George Project
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Bringing modern and affordable residential <br></br> units to Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    King George and 82nd Ave
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhouse and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Coming 2023
                                </span>


                                <span>

                                    <Link href='/res_viewer'>
                                        <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                            <a> Explore </a>
                                        </button>
                                    </Link>


                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='relative object-center w-screen max-h-screenn'>
                        <img class='object-cover' src="img/C2.jpg"></img>
                        <div class="absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                King George Project
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Bringing modern and affordable residential <br></br> units to Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    King George and 82nd Ave
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhouse and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Coming 2023
                                </span>


                                <span>
                                    <a href="com_viewer.html">
                                        <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                            Explore
                                    </button>
                                    </a>
                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>







            </Swiper>}


            {!carousel && <Swiper
                navigation
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >





                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen'>
                        <img class='object-cover' src="img/Roof.jpg"></img>
                        <div class="absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                King George Project
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Bringing modern and affordable residential <br></br> units to Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    King George and 82nd Ave
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhouse and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Coming 2023
                                </span>


                                <span>

                                    <Link href='/res_viewer'>
                                        <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                            <a> Explore </a>
                                        </button>
                                    </Link>


                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='relative object-center w-screen max-h-screenn'>
                        <img class='object-cover' src="img/C2.jpg"></img>
                        <div class="absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                King George Project
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Bringing modern and affordable residential <br></br> units to Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    King George and 82nd Ave
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhouse and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Coming 2023
                                </span>


                                <span>
                                    <a href="com_viewer.html">
                                        <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                            Explore
                                    </button>
                                    </a>
                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>







            </Swiper>}

            <div class="flex divide-x border-t z-20">

                <div class="relative w-1/5 border-gray-500">
                    <div class=" p-8 border-r">
                        <p class="text-gray-400 font-semibold">
                            FOR SALE
                </p>
                        <p class="text-4xl font-bold mr-4">
                            $1,500,000
                </p>
                        <p class="text-gray-400 font-semibold">

                        </p>
                        <p class="text-gray-400 font-semibold">

                        </p>
                    </div>

                    <div class="absolute -top-14 flex bg-white p-4 border-b font-semibold z-20">
                        <div id = 'interior' class="ml-2 font-semibold text-gray-500 hover:text-gray-900 pr-4 border-r-2 " onClick={() => {interiorEterior_Selector('interior'); setCarousel(true)}}>
                            Interior
                </div>
                        <div id = 'exterior' class="mr-4 pl-4 font-semibold text-gray-900 hover:text-gray-900" onClick={() => {interiorEterior_Selector('exterior'); setCarousel(false)}}>
                            Exterior
                </div>

                    </div>

                </div>




                <div class="w-3/5">
                    <div class="py-6 px-28 border-r">
                        <p class="font-bold text-3xl ">
                            King George and 82nd Ave Surrey B.C.
                </p>
                        <p class="font-semibold text-xl mb-6 text-gray-400">
                            A modern detached home
                </p>
                        <div class="flex items-center justify-start mb-8 ">

                            <div class="flex mr-6">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed"
                                    class="svg-inline--fa fa-bed fa-w-20 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512">
                                    <path fill="currentColor" d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Beds
                        </p>
                                <p class="font-bold ml-1">
                                    4
                        </p>

                            </div>

                            <div class="flex mr-6" >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bath"
                                    class="svg-inline--fa fa-bath fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><path fill="currentColor" d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Bath
                    </p>
                                <p class="font-bold ml-1">
                                    4
                    </p>
                            </div>

                            <div class="flex mr-6">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                    class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Sq. Feet
                    </p>
                                <p class="font-bold ml-1">
                                    4
                    </p>

                            </div>

                        </div>
                        <p class="">
                            This property is perfect for a family or expecting family to settle down in. The spacious yard will be great for hosting BBQ's with relatives and for chidlren to play in. The neighborhood is quiet with minimal vehicle frequency which makes it a safe area for children to play. Elementray schools are a 15 minute walk from the residence. Quote simply one of the finest homes on the Front Range.
                </p>

                        <p class="">
                            An integrated internet system is present in the house so you can say goodbye to wifi dead zones. The house is heated using geothermal engery which means your heating bill will be low while you help in reducing your carbon foot print.
                </p>
                    </div>
                </div>



                <div class="relative w-1/5">
                    <div class="grid grid-cols-2 gap-6 py-6 px-8">
                        <div class="">
                            <p class="text-gray-400">Type</p>
                            <p class="mt-1 text-gray-500">Single Family</p>
                        </div>

                        <div class="">
                            <p class="text-gray-400">Year Built</p>
                            <p class="mt-1 text-gray-500">2007</p>
                        </div>
                        <div class="">
                            <p class="text-gray-400">Parking</p>
                            <p class="mt-1 text-gray-500">2 Spaces</p>
                        </div>
                        <div class="">
                            <p class="text-gray-400">Lot</p>
                            <p class="mt-1 text-gray-500">136 Acres</p>
                        </div>

                        <div class="border-gray-500 border-b absolute -top-16 right-0 flex flex-row bg-white px-4 pb-4 pt-2 z-20">

                            <div class="pt-2 font-semibold mr-2">
                                Set up a viewing:
                            </div>


                            <Link href = "/pre-reg">
                            <button
                                class="py-2 px-2 rounded-lg lg:block font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none">
                                <a> Pre-register</a>
                            </button>

                            </Link>



                        </div>


                    </div>





                </div>

            </div>


            <Footer />
        </>
    )
}

function interiorEterior_Selector(select) {
    const interior = document.querySelector('#interior');
    const exterior = document.querySelector('#exterior');

    if (select == 'interior') {
        if (interior.classList.contains('text-gray-500')) {
            interior.classList.remove('text-gray-500');
            interior.classList.add('text-gray-900');
            exterior.classList.remove('text-gray-900');
            exterior.classList.add('text-gray-500');
        }
    } else {
        if (exterior.classList.contains('text-gray-500')) {
            exterior.classList.remove('text-gray-500');
            exterior.classList.add('text-gray-900');
            interior.classList.remove('text-gray-900');
            interior.classList.add('text-gray-500');
        }
    }
}