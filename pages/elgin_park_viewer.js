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

            <Head>

                <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

                <meta charset="utf-8" />
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Elgin Park - Zenith Development</title>
                <meta name="title" content="Elgin Park - Zenith Development" />
                <meta name="description" content="Elgin Park is a commerical project that is bringing restaurants, retail stores, offices and a banquet hall to South Surrey. The modern architecture overlooking King George will attract the community to the plaza." />
                <meta name="msapplication-TileColor" content="#da2c30" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://zenith-development" />
                <meta name="og:title" content="Elgin Park - Zenith Development" />
                <meta name="og:description" content="Elgin Park is a commerical project that is bringing restaurants, retail stores, offices and a banquet hall to South Surrey. The modern architecture overlooking King George will attract the community to the plaza." />
                <meta name="keywords" content="Lowermainland, Surrey, South Surrey, business, Canada, King George, Elgin Park, Retial, banquet hall, warehouses" />
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
                    <div class='object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/SurreyBanquetView01.jpg"
                            alt="Picture of a Roof"
                            width={1910}
                            height={1000}
                            class="object-cover object-center w-full h-40 mb-4"
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/SurreyBanquetView02.jpg"
                            alt="Picture of a Roof"
                            width={1910}
                            height={1000}
                            class="object-cover object-center w-full h-40 mb-4"
                        />
                        {/* <img class='object-cover' src="img/SurreyBanquetView02.jpg"></img> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen lg:mt-0 mt-24n'>
                        <Image
                            src="/img/SurreyBanquetView03.jpg"
                            alt="Picture of a Roof"
                            width={1910}
                            height={1400}
                            class="object-cover object-center w-full h-40 mb-4"
                        />

                        {/* <img class='object-cover' src="img/SurreyBanquetView03.jpg"></img> */}
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
                            src="/img/ELGIN_PARK_VIEWER_C3.jpg"
                            alt="Picture of a Roof"
                            width={1910}
                            height={1000}
                            class="object-cover object-center w-full h-40 mb-4"
                        />

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class='object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/C3.jpg"
                            alt="Picture of a Roof"
                            width={1910}
                            height={1000}
                            class="object-cover object-center w-full h-40 mb-4"
                        />
                    </div>
                </SwiperSlide>









            </Swiper>}

            <div class="flex divide-x border-t z-20 hidden md:inline-flex">


                <div class="relative  w-1/5 lg:w-1/6 border-gray-500">
                    <div class=" p-6 border-r">
                        <p class="text-gray-400 sm:text-base text-sm font-semibold">
                            Phase A
                        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4 border-gray-300 border-b md:border-b-0">
                            0 of 10 <br></br>  units Sold
                        </p>
                        <p class="hidden md:block text-gray-400 font-semibold pb-4 border-gray-300 border-b">
                            Restaurant, banquet hall, and retail
                        </p>
                        <p class="text-gray-400 sm:text-base text-sm font-semibold mt-2">
                            Phase B
                        </p>

                        <p class="lg:text-4xl md:text-2xl font-bold mr-4">
                            0 of 40 <br></br> units sold
                        </p>
                        <p class="hidden md:block text-gray-400 font-semibold">
                            Office and retail
                        </p>
                    </div>

                    <div class="absolute -top-14 flex bg-white p-4 font-semibold z-10">
                        <div id='exterior' class="ml-2 font-semibold text-gray-900 hover:text-gray-900 pr-4 border-r-2 cursor-pointer" onClick={() => { interiorEterior_Selector('exterior'); setCarousel(false) }}>
                            Exterior
                        </div>
                        <div id='interior' class="mr-4 pl-4 font-semibold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => { interiorEterior_Selector('interior'); setCarousel(true) }}>
                            Interior
                        </div>

                    </div>

                </div>




                <div class="w-3/5 lg:w-4/6">
                    <div class="py-6 xl:px-28 lg:px-20 md:px-12 sm:px-6 border-r">
                        <div class="flex lg:flex-row flex-col">
                            <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                                Elgin Park
                            </h1>

                            <p class="font-bold text-1xl text-gray-400 lg:mt-3">
                                commercial spaces
                            </p>

                        </div>

                        <p class="font-bold text-2xl mb-6 mt-2">
                            3020 148 St, Surrey B.C.
                        </p>

                        <p class="">

                        </p>

                        <p class="mb-2">
                            Elgin Park is bringing restaurants, retail stores, offices and a banquet hall to South Surrey. The modern architecture outlooking 148 St will attract the community to the plaza. Phase A will consist of a restaurant building and another building with a banquet hall on the second floor and retail units at the base. Phase B will consists of a combination of retail and office units.
                        </p>
                        <p class="mb-2">
                            The underground parking in combination with outdoor parking will have more than 300 parking spots available for use. Two access points to the plaza are designed to keep traffic moving and can make entering and exiting the plaza easy, even during peak hours.
                        </p>
                        <p>
                            We anticipate Elgin Park will be a center where people meet to work, play, and eat. Pre-register today to become a part of this amazing opportunity.                        </p>
                    </div>
                </div>



                <div class="relative w-1/5 lg:w-1/6">

                    <div class="grid grid-cols-2 gap-6 py-6 px-8">

                        <div class="">
                            <p class="text-gray-900 font-semibold">Year Built</p>
                            <p class="mt-1 text-gray-500">2023</p>
                        </div>

                        <div class="">
                            <p class="text-gray-900 font-semibold">Parking Sports</p>
                            <p class="mt-1 text-gray-500">300+</p>
                        </div>

                        <div class="">
                            <p class="text-gray-900 font-semibold">Features</p>
                            <ul class="list-disc">
                                <li class="mt-1 text-gray-500">
                                    Underground Parking
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

            <div class="px-4 md:hidden mx-auto narrow:mx-0">
                <div className="py-2 flex flex-col flex-row justify-between border-b">
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

                    <div class="flex mt-2 ">

                        <div class="">
                            Set up a viewing:
                        </div>

                        <div class="ml-2">
                            <Link href="/pre-reg">
                                <button
                                    class="items-center px-2 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                    <a> Pre-register</a>
                                </button>

                            </Link>
                        </div>
                    </div>




                </div>

                <div class="xl:px-28 lg:px-20 md:px-12 sm:px-6">
                    <div class="flex lg:flex-row flex-row">
                        <h1 class="font-bold text-3xl xl:mb-2 mr-2">
                            Elgin Park
                        </h1>

                        <p class="font-bold text-1xl text-gray-400 mt-3">
                            commercial spaces
                        </p>

                    </div>

                    <p class="font-bold sm:text-2xl text-xl b-6 mt-2 md:mb-0 mb-4">
                        3020 148 St, Surrey B.C.
                    </p>

                    <div class="border-b">

                        <div class="flex justify-evenly sm:ml-2 narrow:ml-16 ml-2">
                            <div class="grid grid-cols-2 gap-6 py-6 px-8 sm:flex justify-evenly">


                                <div class="">
                                    <p class="text-gray-900 font-semibold">Year Built</p>
                                    <p class="mt-1 text-gray-500">2023</p>
                                </div>

                                <div class="">
                                    <p class="text-gray-900 font-semibold">Parking Sports</p>
                                    <p class="mt-1 text-gray-500">300+</p>
                                </div>

                                <div class="">
                                    <p class="text-gray-900 font-semibold">Features</p>
                                    <ul class="list-disc">
                                        <li class="mt-1 text-gray-500">
                                            Underground Parking
                                        </li>
                                        <li class="mt-1 text-gray-500">
                                            Event Building
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="border-b">

                        <div class="grid grid-cols-2 divide-x">
                            <div class="p-4">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase A
                                </p>

                                <p class="text-2xl font-bold border-gray-300">
                                    0 of 10 <br></br> units sold
                                </p>
                                <p class="text-gray-400 font-semibold">
                                    Restaurant, banquet hall, and retail
                                </p>


                            </div>

                            <div class="p-4 ">
                                <p class="text-gray-400 text-md font-semibold">
                                    Phase B</p>

                                <p class="text-2xl font-bold">
                                    0 of 40 <br></br> units sold
                                </p>
                                <p class=" text-gray-400 font-semibold">
                                    Office and retail
                                </p>


                            </div>

                        </div>


                    </div>

                    <p class="mb-2 mt-4">
                        Elgin Park is bringing restaurants, retails stores, offices and a banquet hall to South Surrey. The modern architecture outlooking onto 148 St will attract the community to the area. Phase A will consist of a restaurant building and another building with a banquet hall on the second floor and retail units at the base. Phase B will bring a combination of retail and office units.
                    </p>
                    <p class="mb-2">
                        The underground parking in combination with outdoor parking will have more than 300 parking spots available for use. Two access points to the plaza are designed to keep traffic moving and can make traversing the area easy even during peak hours.
                    </p>
                    <p>
                        We anticipate Elgin Park will be a center where people meet to work, play, and eat. Pre-register today to become apart of this amazing opportunity.
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