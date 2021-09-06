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


export default function Crest_Lane_Viewer() {
    const [carousel, setCarousel] = useState(false);

    return (
        <>
            <Head>

                <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

                <meta charset="utf-8" />
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Crest Lane - Zenith Development</title>
                <meta name="title" content="Crest Lane - Zenith Development" />
                <meta name="description" content="Crest Lane is a residential project that is bringing townhomes and condos to Central Surrey, perfect for commuters and young families." />
                <meta name="msapplication-TileColor" content="#da2c30" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta name="og:url" content="https://zenith-development" />
                <meta name="og:title" content="Crest Lane - Zenith Development" />
                <meta name="og:description" content="Crest Lane is a residential project that is bringing townhomes and condos to Central Surrey, perfect for commuters and young families." />
                <meta name="keywords" content="Lowermainland, Surrey, centeral surrey, residential, living, Canada, King George, Crest Lane, townhouses, condos, apartments, new homes for sale, listings, 2-4 bedrooms, 1-2 bath, parking, child play area," />
            </Head>

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
                    <div class='object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/Main_82_KingGeorge_Exterior.jpg"
                            alt="Crest Lane, modern residential townhomes and condos in Surrey"
                            height={1225}
                            width={1910}
                        />
                    </div>
                </SwiperSlide>







            </Swiper>}

            <div class="flex divide-x border-t z-10 hidden md:inline-flex">


                <div class="relative w-1/5 border-gray-500">
                    <div class=" p-6 border-r">
                        <p class="text-gray-400 sm:text-base text-sm font-semibold">
                            Phase A
                        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4 border-gray-300 border-b md:border-b-0">
                            0 of 78 <br></br> Condos sold
                        </p>
                        <p class="hidden md:block text-gray-400 font-semibold pb-4 border-gray-300 border-b">

                        </p>
                        <p class="text-gray-400 sm:text-base text-sm font-semibold mt-2">
                            Phase B
                        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4">
                            0 of 34 <br></br> Town-homes sold
                        </p>
                        <p class="hidden md:block text-gray-400 font-semibold">

                        </p>
                    </div>

                    <div class="absolute -top-14 flex bg-white p-4 font-semibold z-10">
                        <div id='exterior' class="ml-2 font-semibold text-gray-900 hover:text-gray-900 pr-4  cursor-pointer" onClick={() => { interiorEterior_Selector('exterior'); setCarousel(false) }}>
                            Exterior
                        </div>
                        <div id='interior' class="hidden mr-4 pl-4 font-semibold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => { interiorEterior_Selector('interior'); setCarousel(true) }}>
                            Interior
                        </div>

                    </div>

                </div>




                <div class="w-3/5">
                    <div class="py-6 xl:px-28 lg:px-20 md:px-12 sm:px-6 border-r">
                        <div class="flex lg:flex-row flex-col">

                            <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                                Crest Lane
                            </h1>

                            <h2 class="font-bold text-1xl text-gray-400 lg:mt-3">
                                modern condos and townhomes
                            </h2>

                        </div>

                        <h2 class="font-bold text-2xl mb-6 mt-2">
                            King George and 82nd Ave, Surrey B.C.
                        </h2>

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
                            We are bringing modern townhomes and condos to the Surrey Central area. Crest Lane is at the heart of all that Surrey has to offer. The King George Skytrain is a 10-minute bus ride away, making it a perfect location for commuters. The central city shopping experience is nearby to provide you with groceries, cloths and tech needs alongside great cultural restaurants.
                        </p>
                    </div>
                </div>



                <div class="relative w-1/5">
                    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-6 py-6 px-8">
                        <div class="">
                            <p class="text-gray-900 font-semibold">Type</p>
                            <p class="mt-1 text-gray-500">Condo and Townhomes</p>
                        </div>

                        <div class="">
                            <p class="text-gray-900 font-semibold">Completion Year</p>
                            <p class="mt-1 text-gray-500">2023</p>
                        </div>
                        <div class="">
                            <p class="text-gray-900 font-semibold">Ameneties</p>
                            <ul class="list-disc">
                                <li class="mt-1 text-gray-500">
                                    Child Play Area
                                </li>
                                <li class="mt-1 text-gray-500">
                                    Event Building
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="absolute -top-24 right-0 flex flex-col bg-white font-semibold z-10 px-4">
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

            <div class="px-4 md:hidden ">
                <div className="py-2 flex justify-between border-gray-200 border-b">
                    <div class="flex">


                        <div class="mr-2 hidden" >
                            Interior/Exterior
                        </div>

                        <div>

                            <Switch
                                checked={carousel}
                                onChange={setCarousel}
                                className={`${carousel ? 'bg-blue-600' : 'bg-gray-200'
                                    } hidden relative inline-flex items-center h-6 rounded-full w-11`}
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
                    <div class="flex narrow:flex-row flex-col">
                        <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                            Crest Lane
                        </h1>

                        <h2 class="font-bold text-1xl text-gray-400 narrow:mt-3">
                            modern condos and townhomes
                        </h2>

                    </div>

                    <h2 class="font-bold sm:text-2xl text-xl b-6 mt-2 md:mb-0 mb-4">
                        King George Boulevard and 82nd Ave, Surrey B.C.
                    </h2>

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
                                    {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                        class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                                    </svg>

                                    <p class="text-gray-600 ml-2">
                                        Sq. Feet
                                    </p>
                                    <p class="font-bold ml-1">
                                        400
                                    </p> */}

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
                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square"
                                class="svg-inline--fa fa-vector-square fa-w-16 w-6 h-6 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path>
                            </svg>

                            <p class="text-gray-600 ml-2">
                                Sq. Feet
                            </p>
                            <p class="font-bold ml-1">
                                400
                            </p> */}

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


                        <div class="flex justify-evenly sm:ml-2 narrow:ml-16 ml-2">
                            <div class="grid grid-cols-2 gap-6 py-6 px-8 sm:flex justify-evenly">

                                <div class="sm:px-2">
                                    <p class="text-black font-semibold">Type</p>
                                    <p class="mt-1 text-gray-500">Condo and Townhomes</p>
                                </div>

                                <div class="sm:px-2">
                                    <p class="text-black font-semibold">Completion</p>
                                    <p class="mt-1 text-gray-500">2023</p>
                                </div>
                                <div class="sm:px-8">
                                    <p class="text-black font-semibold">Ameneties</p>
                                    <ul class="list-disc">
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

                    <div>

                        <div class="grid grid-cols-2 divide-x border-b">
                            <div class="p-4">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase A
                                </p>

                                <p class="text-2xl font-bold border-gray-300">
                                    0 of 78 <br></br> Condos sold
                                </p>
                                <p class="text-gray-400 font-semibold">

                                </p>


                            </div>

                            <div class="p-4 ">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase B</p>

                                <p class="text-2xl font-bold">
                                    0 of 34 <br></br> Town-homes sold
                                </p>
                                <p class=" text-gray-400 font-semibold">

                                </p>


                            </div>

                        </div>


                    </div>

                    <p class="mt-2 pb-4">
                        We are bringing modern townhomes and condos to the Surrey Central area. Crest Lane is at the heart of all that Surrey has to offer. The King George Skytrain is a 10-minute bus ride away, making it a perfect location for commuters. The central city shopping experience is nearby to provide you with groceries, cloths and tech needs alongside great cultural restaurants.
                    </p>

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