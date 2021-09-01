// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'



SwiperCore.use([Navigation, Pagination]);

const Main = () => {
    const [carousel, setCarousel] = useState(false);
    return (
        <>


            <Swiper
                navigation
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >

                <SwiperSlide>
                    <div class='z-40 object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/Main_82_KingGeorge_Exterior.jpg"
                            alt="Crest Lane Render"
                            height={1400}
                            width={2000}
                            layout="responsive"
                            class=""
                        />
                        {/* <img class='object-cover' src="/img/Main_82_KingGeorge_Exterior.jpg"></img> */}
                        <div class="hidden sm:block absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                Crest Lane
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
                                    King George Boulevard and 82nd Ave Surrey
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    34 Townhomes and 72 Condo Units
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Construction Underway
                                </span>


                                <span>
                                    <Link href="/Crest-Lane">

                                        <a>
                                            <button class="items-center px-2 py-2 ml-20 sm:ml-28 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                                Explore
                                            </button>
                                        </a>

                                    </Link>

                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>


{/*
                <SwiperSlide>
                    <div class='z-40 object-center w-screen max-h-screen lg:mt-0 mt-24'>
                        <Image
                            src="/img/Main_C2.jpg"
                            alt="Crest Lane Render"
                            height={1320}
                            width={1910}
                            layout="responsive"
                            class="object-cover"
                        />
                        {
                        <div class="hidden sm:block absolute top-36 left-16 sm:top-52 sm:left-40 bg-gray-900 bg-opacity-60 rounded-lg">
                            <h1 class="text-white text-3xl mr-4 ml-4 mt-4 font-bold">
                                Elgin Park
                            </h1>
                            <p class="flex ml-4 mt-1 text-white">
                                Developing modern commercial buildings in <br></br>South Surrey
                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>
                                    3020 148 St Surrey
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>
                                    Four Commercial Buildings
                                </span>

                            </p>
                            <p class="flex ml-4 mt-1 text-white">
                                <svg class="text-white w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-1">
                                    Phase A Leasing
                                </span>


                                <span>
                                    <Link href="/Elgin-Park">
                                        <a>
                                            <button class="items-center px-2 py-2 ml-32 sm:ml-40 mb-4 mr-6 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none border-b">
                                                Explore
                                            </button>
                                        </a>

                                    </Link>

                                </span>
                            </p>

                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </>

    );
}

export default Main;
