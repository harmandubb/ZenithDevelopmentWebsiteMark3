import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Swiper from '../components/Main_Carousel'

export default function Projects() {
    return (
        <>

            <Head>

                <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

                <meta charset="utf-8" />
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Projects - Zenith Development</title>
                <meta name="title" content="Projects - Zenith Development" />
                <meta name="description" content="Zenith Development has been developing quality commercial and structures since 1994. Visit our site to take a look at your dream home or business space. We are excited to make your dream become a reality." />
                <meta name="msapplication-TileColor" content="#da2c30" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://zenith-development" />
                <meta name="og:title" content="Projects - Zenith Development" />
                <meta name="og:description" content="Zenith Development has been developing quality commercial and structures since 1994. Visit our site to take a look at your dream home or business space. We are excited to make your dream become a reality." />
                <meta name="keywords" content="Lowermainland, Surrey, Vancouver, Greater Vancouver, Metro Vancouver, residential, commercial, strata, living, business, retail, Canada, Elgin Park, King George, Crest Lane, townhouses, condos, apartments, new homes for sale, new properties for sale, listings, Roofing, Torch On, Reroof, Shigles, L " />
            </Head>

            <Nav />

            <div class="container mx-auto lg:p-20 md:p-12 sm:p-8 p-2">
                <div class="justify-center">
                    <h1
                        class="sticky top-32 sm:top-28 md:top-36 lg:top-32 mt-8 pt-2 pb-2 z-10 text-white text-center text-3xl font-bold bg-gray-900 rounded-lg">
                        Ongoing
                    </h1>

                    <div class="flex flex-col md:flex-row sm:mt-16 md:mt-20 lg:mt-8 mt-24">
                        <div class="">
                            <Image
                                class="hidden md:block object-cover object-center rounded-lg"
                                src="/img/82_KingGeorge_Exterior.jpg"
                                alt="Crest Lane, Modern residential townhomes and condos in Surrey"
                                width={550}
                                height={400}
                            />
                            {/* <img class="object-contain rounded-lg max-h-96" src="/img/82_KingGeorge_Exterior.jpg"></img> */}
                        </div>

                        <div class="ml-0 md:ml-2 xl:ml-4">
                            <div class="text-black">
                                <h1 class="text-black text-3xl sm:-mt-2 p-2 font-bold">
                                    Crest Lane
                                </h1>
                                <p class="flex ml-2 text-black font-semibold">
                                    Bringing modern and affordable residential units to Surrey
                                </p>
                                <div class="flex ml-2 mt-1 text-black">
                                    <div>
                                        <svg class="flex-none w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                    </div>


                                    <div>
                                        King George Boulevard and 82nd Ave, Surrey
                                    </div>

                                </div>
                                <div class="flex ml-2 mt-1 text-black">
                                    <svg class="w-6 flex-none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <div class="">
                                        34 Townhouse and 78 Condo Units
                                    </div>

                                </div>
                                <div class="flex ml-2 text-black">
                                    <svg class="flex-none text-black fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24"
                                        width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon">
                                        <path
                                            d="M9 2V1a1 1 0 1 1 2 0v1h3V1a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1h3zm0 2H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4h-3v1a1 1 0 0 1-2 0V4zM3 8h2v2H3V8zm0 4h2v2H3v-2zm12 0h2v2h-2v-2zm0-4h2v2h-2V8zM7 8h2v2H7V8zm4 0h2v2h-2V8zm0 4h2v2h-2v-2zm-4 0h2v2H7v-2z">
                                        </path>
                                    </svg>


                                    <div class="">
                                        Coming 2023
                                    </div>

                                </div>

                                <div class="flex ">
                                    <Link href="/Crest-Lane">
                                        <div
                                            class="mt-4 justify-center inline-flex w-full px-auto py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">Explore

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </div>


                        <div class="ml-8 w-1/3 mr-2 hidden xl:block">

                            <h2 class="font-bold text-lg">
                                Description:
                            </h2>

                            <div>
                                We are bringing modern townhomes and condos to the Surrey Central area. Crest Lane is at the heart of all that Surrey has to offer. The King George Skytrain is a 10-minute bus ride away, making it a perfect location for commuters. The central city shopping experience is nearby to provide you with groceries, cloths and tech needs alongside great cultural restaurants.                         </div>


                        </div>

                    </div>
                </div>



                <div class="flex flex-col md:flex-row mt-4 md:mt-8 lg:mt-8">
                    <div class="">
                        <Image
                            class="hidden md:block object-cover object-center rounded-lg"
                            src="/img/Main_C2.jpg"
                            alt="Elgin Park: commerical retail and office spaces in South Surrey"
                            width={550}
                            height={400}
                            layout="intrinsic"
                        />
                        {/* <img class="object-contain rounded-lg max-h-96" src="/img/Main_C2.jpg"></img> */}
                    </div>

                    <div class="ml-0 md:ml-2 xl:ml-4">
                        <div class="text-black">
                            <h1 class="text-black text-3xl sm:-mt-2 p-2 font-bold">
                                Elgin Park
                            </h1>
                            <p class="flex ml-2 text-black font-semibold">
                                Developing modern commercial buildings in South Surrey
                            </p>
                            <div class="flex ml-2 mt-1 text-black">
                                <div>
                                    <svg class="flex-none w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>

                                <div>
                                    3020 148 St, Surrey
                                </div>

                            </div>
                            <div class="flex ml-2 mt-1 text-black">
                                <svg class="w-6 text-black flex-none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <div class="">
                                    60 Retail Units
                                </div>

                            </div>
                            <div class="flex ml-2 text-black">
                                <svg class="flex-none text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24"
                                    width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon">
                                    <path
                                        d="M9 2V1a1 1 0 1 1 2 0v1h3V1a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1h3zm0 2H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4h-3v1a1 1 0 0 1-2 0V4zM3 8h2v2H3V8zm0 4h2v2H3v-2zm12 0h2v2h-2v-2zm0-4h2v2h-2V8zM7 8h2v2H7V8zm4 0h2v2h-2V8zm0 4h2v2h-2v-2zm-4 0h2v2H7v-2z">
                                    </path>
                                </svg>


                                <div class="">
                                    Leasing Now
                                </div>

                            </div>

                            <div class="flex ">
                                <Link href="/Elgin-Park">
                                    <div
                                        class="mt-4 justify-center inline-flex w-full px-auto py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">Explore

                                    </div>

                                </Link>

                            </div>
                        </div>
                    </div>


                    <div class="ml-8 w-1/3 mr-2 hidden xl:block">
                        <h2 class="font-bold text-lg">
                            Description:
                        </h2>
                        <div>
                            <p class="mb-2">
                                Elgin Park is bringing restaurants, retail stores, offices, and a banquet hall to South Surrey. The modern architecture outlooking onto 148 St will attract the community to your business. Phase A will consist of a restaurant building and another building with a banquet hall on the second floor and retail units on the ground. Phase B will bring a combination of retail and office units.
                            </p>
                            <p class="mb-2">
                                The underground parking in and the outdoor parking will consist of more than 300 parking spots available for use. Two access points to the plaza are designed to keep traffic moving and can make traversing the area easy even during peak hours.                        </p>



                        </div>
                    </div>

                </div>

                {/* <div id="past"
                    class="sticky top-32 sm:top-28 md:top-36 lg:top-32 mt-8 pt-2 pb-2 z-10 text-white text-center text-3xl font-bold bg-gray-900 rounded-lg">
                    2020
                </div> */}
            </div>









            <Footer />
        </>
    )
}

