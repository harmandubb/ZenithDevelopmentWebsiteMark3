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
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen'>
                        <img class='object-cover' src="img/Roof.jpg"></img>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='relative object-center w-screen max-h-screen'>
                        <img class='object-cover' src="img/C2.jpg"></img>
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

            <div class="flex divide-x border-t z-20 hidden md:inline-flex">


                <div class="relative w-1/5 border-gray-500">
                    <div class=" p-6 border-r">
                        <p class="text-gray-400 sm:text-base text-sm font-semibold">
                            Phase A
        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4 border-gray-300 border-b md:border-b-0">
                            0 of 72 <br></br> Condos sold
        </p>
                        <p class="hidden md:block text-gray-400 font-semibold pb-4 border-gray-300 border-b">
                            Units starting at $400,000
        </p>
                        <p class="text-gray-400 sm:text-base text-sm font-semibold mt-2">
                            Phase B
        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4">
                            0 of 34 <br></br> Town-homes sold
        </p>
                        <p class="hidden md:block text-gray-400 font-semibold">
                            Units starting at $1,100,000
        </p>
                    </div>

                    <div class="absolute -top-14 flex bg-white p-4 font-semibold z-20">
                        <div id='exterior' class="ml-2 font-semibold text-gray-900 hover:text-gray-900 pr-4 border-r-2 cursor-pointer" onClick={() => { interiorEterior_Selector('exterior'); setCarousel(false) }}>
                            Exterior
</div>
                        <div id='interior' class="mr-4 pl-4 font-semibold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => { interiorEterior_Selector('interior'); setCarousel(true) }}>
                            Interior
</div>

                    </div>

                </div>




                <div class="w-3/5">
                    <div class="py-6 xl:px-28 lg:px-20 md:px-12 sm:px-6 border-r">
                        <div class="flex lg:flex-row flex-col">
                            <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                                Project name if
                    </h1>

                            <p class="font-bold text-1xl text-gray-400 lg:mt-3">
                                modern condos and townhomes
                    </p>

                        </div>

                        <p class="font-bold text-2xl mb-6 mt-2">
                            King George and 82nd Ave, Surrey B.C.
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
                                    2 - 4
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
                                    1 - 2
    </p>
                            </div>

                            <div class="flex mr-6 hidden xl:inline-flex">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                    class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Sq. Feet
    </p>
                                <p class="font-bold ml-1">
                                    400
    </p>

                                <div class="flex mr-6 ml-6">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse"
                                        class="svg-inline--fa fa-warehouse fa-w-20 w-8 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path>
                                    </svg>

                                    <p class="text-gray-600 ml-2">
                                        Parking
                    </p>
                                    <p class="font-bold ml-1">
                                        1
                        </p>
                                </div>

                            </div>



                        </div>

                        <div class="flex mr-6 mb-8 xl:hidden">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                            </svg>

                            <p class="text-gray-600 ml-2">
                                Sq. Feet
    </p>
                            <p class="font-bold ml-1">
                                400
    </p>

                            <div class="flex mr-6 ml-6">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse"
                                    class="svg-inline--fa fa-warehouse fa-w-20 w-8 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Parking
                    </p>
                                <p class="font-bold ml-1">
                                    1
                        </p>
                            </div>

                        </div>
                        <p class="">

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
                            <p class="mt-1 text-gray-500">Condo</p>
                        </div>

                        <div class="">
                            <p class="text-gray-400">Year Built</p>
                            <p class="mt-1 text-gray-500">2023</p>
                        </div>
                        <div class="">
                            <p class="text-gray-400">Ameneties</p>
                            <ul>
                                <li class="mt-1 text-gray-500">
                                    Child Play Area
                        </li>
                                <li class="mt-1 text-gray-500">
                                    Event Building
                        </li>
                            </ul>

                        </div>
                    </div>
                    <div class="absolute -top-24 right-0 flex flex-col bg-white font-semibold z-20 px-4">
                        <div class="md:block ml-2 pt-2 font-semibold text-gray-900 hover:text-gray-900 pr-2">
                            Set up a viewing:
                            </div>

                        <div class="py-2 mr-1 font-semibold text-gray-500 hover:text-gray-900 cursor-pointer">

                            <div>



                                <Link href="/pre-reg">
                                    <button
                                        class="py-2 mb-2 px-1 w-full item-center rounded-lg font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none">
                                        <a> Pre-register</a>
                                    </button>

                                </Link>

                            </div>

                        </div>

                    </div>










                </div>

            </div>

            <div class="px-4 md:hidden">
                <div className="py-2 flex justify-between">
                    <div class="flex">


                        <div class="mr-2" >
                            Interior/Exterior
                    </div>

                        <div>

                            <Switch
                                checked={carousel}
                                onChange={setCarousel}
                                className={`${carousel ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex items-center h-6 rounded-full w-11`}
                            >

                                <span
                                    className={`${carousel ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div class="flex ">

                        <div class="ml-2">
                            Set up a viewing:
                        </div>

                        <div class="ml-2">

                            <a href="com_viewer.html">
                                <button class="items-center px-2 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                    pre-register
                                    </button>
                            </a>


                        </div>


                    </div>




                </div>

                <div class="xl:px-28 lg:px-20 md:px-12 sm:px-6">
                    <div class="flex lg:flex-row flex-col">
                        <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                            Project name if
                    </h1>

                        <p class="font-bold text-1xl text-gray-400 lg:mt-3">
                            modern condos and townhomes
                    </p>

                    </div>

                    <p class="font-bold sm:text-2xl text-xl b-6 mt-2 md:mb-0 mb-4">
                        King George and 82nd Ave, Surrey B.C.
                        </p>

                    <div class="border-b">

                        <div class="flex items-center justify-center mb-8 ">

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
                                    2 - 4
        </p>

                            </div>





                            <div class="flex mr-6 justify-center" >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bath"
                                    class="svg-inline--fa fa-bath fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><path fill="currentColor" d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Bath
        </p>
                                <p class="font-bold ml-1">
                                    1 - 2
        </p>
                            </div>

                            <div class="sm:flex hidden mr-6">
                                <div class="flex justify-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                        class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                                    </svg>

                                    <p class="text-gray-600 ml-2">
                                        Sq. Feet
        </p>
                                    <p class="font-bold ml-1">
                                        400
        </p>

                                    <div class="flex mr-6 ml-6">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse"
                                            class="svg-inline--fa fa-warehouse fa-w-20 w-8 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path>
                                        </svg>

                                        <p class="text-gray-600 ml-2">
                                            Parking
                        </p>
                                        <p class="font-bold ml-1">
                                            1
                            </p>
                                    </div>

                                </div>


                            </div>





                        </div>

                        <div class="flex justify-center sm:hidden mr-6 ml-8 pl-1">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                            </svg>

                            <p class="text-gray-600 ml-2">
                                Sq. Feet
    </p>
                            <p class="font-bold ml-1">
                                400
    </p>

                            <div class="flex mr-6 ml-6">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse"
                                    class="svg-inline--fa fa-warehouse fa-w-20 w-8 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path>
                                </svg>

                                <p class="text-gray-600 ml-2">
                                    Parking
                    </p>
                                <p class="font-bold ml-1">
                                    1
                        </p>
                            </div>

                        </div>


                        <div class="flex justify-center">
                            <div class="grid grid-cols-2 gap-6 py-6 px-8 sm:flex">

                                <div class="sm:px-8">
                                    <p class="text-black font-semibold">Type</p>
                                    <p class="mt-1 text-gray-500">Condo</p>
                                </div>

                                <div class="sm:px-8">
                                    <p class="text-black font-semibold">Year Built</p>
                                    <p class="mt-1 text-gray-500">2023</p>
                                </div>
                                <div class="sm:px-8">
                                    <p class="text-black font-semibold">Ameneties</p>
                                    <ul>
                                        <li class="mt-1 text-gray-500">
                                            Child Play Area
                        </li>
                                        <li class="mt-1 text-gray-500">
                                            Event Building
                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>

                    <p class="mt-2 pb-4 border-b">
                        An integrated internet system is present in the house so you can say goodbye to wifi dead zones. The house is heated using geothermal engery which means your heating bill will be low while you help in reducing your carbon foot print.
</p>
                    <div>

                        <div class="grid grid-cols-2 divide-x">
                            <div class="p-4">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase A
        </p>

                                <p class="text-2xl font-bold border-gray-300">
                                    0 of 72 <br></br> Condos sold
        </p>
                                <p class="text-gray-400 font-semibold">
                                    Units starting at $400,000
        </p>


                            </div>

                            <div class="p-4 ">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase B</p>

                                <p class="text-2xl font-bold">
                                    0 of 34 <br></br> Town-homes sold
        </p>
                                <p class=" text-gray-400 font-semibold">
                                    Units starting at $1,100,000
        </p>


                            </div>

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