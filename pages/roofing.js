import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Swiper from '../components/Main_Carousel'
import QuoteBlock from '../components/Quote'

export default function Roofing() {
    return (
        <>
            <Head>

                <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

                <meta charset="utf-8" />
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Roofing - Zenith Development</title>
                <meta name="title" content="Roofing - Zenith Development" />
                <meta name="description" content="Zenith Development has been installing quality roofs in the Greater Vancouver area since 1994. Contact us to get a quote on a roofing service." />
                <meta name="msapplication-TileColor" content="#da2c30" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://zenith-development.com/pre-reg" />
                <meta name="og:title" content="Roofing - Zenith Development" />
                <meta name="og:description" content="Zenith Development has been installing quality roofs in the Greater Vancouver area since 1994. Contact us to get a quote on a roofing service." />
                <meta name="keywords" content="Roofing, Torch On, Reroof, Shigles, Lowermainland, Surrey, Vancouver, Greater Vancouver, Metro Vancouver, residential, commercial, strata, living, business, retail, Canada, Elgin Park, King George, Crest Lane, townhouses, condos, apartments, new homes for sale, new properties for sale, listings " />
            </Head>

            <Nav />

            <section class="text-gray-700">
                <div class="relative bg-cover mx-auto lg:p-20" style={{ backgroundImage: 'url(/img/House_render.jpg)' }}>
                    <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

                    <section class="text-gray-700 body-font object-contain">
                        <div class="container px-8 py-48 mx-auto lg:px-4" >
                            <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                                <h2 class="z-10 mb-1 text-xs font-semibold tracking-widest text-white uppercase title-font"></h2>
                                <h1 class="z-10 mb-6 text-3xl font-semibold tracking-tighter text-white sm:text-5xl title-font">Installing quality roofs in the Greater Vancouver area since 1994</h1>
                                <p class="z-10 font-semibold justify-center mx-auto md:text-lg text-md font-medium leading-relaxed text-white lg:w-2/3"> Contact us or sign up below for a quote</p>




                                <QuoteBlock />


                            </div>




                        </div>
                    </section>
                </div>
            </section>




            <section class="text-gray-700 ">
                <div class="container flex flex-col items-start px-5 md:py-8 pb-4 mx-auto lg:items-center md:flex-row lg:px-28">
                    <div class="w-full mb-4 lg:w-5/6 lg:max-w-lg md:w-1/2">
                        <img class="hidden md:block object-cover object-center rounded" alt="hero"
                            src="/img/Elgin Park Roofing.jpg"></img>
                    </div>
                    <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                        <h1 class="mb-4 text-2xl font-bold tracking-tighter text-left text-black title-font">
                            Commerical, residential or strata properties
                            <br></br>
                            We do it all.</h1>

                        <p class="flex mb-2 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                        </span>Torch On Installation</p>
                        <p class="flex mb-2 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg></span>Roof Repair</p>
                        <p class="flex mb-6 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg></span>Reroof Service</p>

                        <p class="mb-8 text-base leading-relaxed text-left text-gray-700">
                            Take a look at our projects to see our roofing work.
                        </p>

                        <Link href="/projects">

                            <button class="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">
                                Check Out Our Projects
                            </button>

                        </Link>

                    </div>
                </div>

            </section>



            <Footer />
        </>
    )
}

<div class="flex justify-center">
    <button class="inline-flex px-6 py-2 ml-4 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
        Get a Quote
    </button>
</div>
