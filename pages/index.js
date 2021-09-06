import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Footer from '../components/Footer'
import Main from '../components/Main_Carousel'
import Swiper from '../components/Main_Carousel'

import Nav from '../components/Nav'

export default function Home() {

  <script>0</script>
  return (
    <>

      <Head>

        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=devide-width, initial-scale=1" />
        <title>Zenith Development</title>
        <meta name="title" content="Zenith Development" />
        <meta name="description" content="Zenith Development has been developing quality commercial and structures since 1994. Visit our site to take a look at your dream home or business space. We are excited to make your dream become a reality." />
        <meta name="msapplication-TileColor" content="#da2c30" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="og:url" content="https://zenith-development" />
        <meta name="og:title" content="Zenith Development" />
        <meta name="og:description" content="Zenith Development has been developing quality commercial and structures since 1994. Visit our site to take a look at your dream home or business space. We are excited to make your dream become a reality." />
        <meta name="keywords" content="Lowermainland, Surrey, Vancouver, Greater Vancouver, Metro Vancouver, residential, commercial, strata, living, business, retail, Canada, Elgin Park, King George, Crest Lane, townhouses, condos, apartments, new homes for sale, new properties for sale, listings, Roofing, Torch On, Reroof, Shigles, L " />
      </Head>
      <Nav />
      <body>




        <Swiper />

        <section class="text-gray-700 body-font">
          <div class="container flex flex-col items-center px-5 py-2 mx-auto lg:px-20 lg:py-6 md:flex-row">
            <div
              class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
              <h2 class="mb-1 text-sm font-semibold tracking-widest text-blue-500 title-font">
                No project too big, No project too small
              </h2>
              <h1
                class="mb-4 text-4xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
                Welcome
              </h1>
              <p class="mb-8 text-sm sm:text-base leading-relaxed text-left text-gray-700 lg:text-left lg:text-1xl">
                Zenith Development has been building homes, strata properties and installing roofs in the greater Vancouver area since 1994. As members of the National Home Warranty and the Pacific Home Warranty association we stand firmly behind our quality work.
              </p>

              <p class="mb-8 text-sm sm:text-base leading-relaxed text-left text-gray-700 lg:text-left lg:text-1xl">
                We let our projects speak for themselves, so check them out!
              </p>

              <div class="flex justify-center">
                <Link href="/projects">
                  <button
                    class="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">
                    Check Out Our Projects
                  </button>
                </Link>

                <p class="mt-2 px-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
                  Pre-register now for a property viewing.

                  <Link href="/pre-reg">
                    <a
                      class="2xl:ml-2 inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                      Learn More
                      <svg class="w-8 h-8 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                        height="20" fill="currentColor">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                      </svg>
                    </a>

                  </Link>

                </p>
              </div>
            </div>

            <div class="hidden md:block flex w-5/6 lg:max-w-lg lg:w-full md:w-1/2 static">
              <figure class="relative">
                <Image
                  class="hidden md:block object-cover object-center rounded-lg"
                  src="/img/82_KingGeorge_Exterior.jpg"
                  alt="Crest Lane, modern residential townhomes and condos in Surrey"
                  width={800}
                  height={600}
                />

              </figure>

            </div>

          </div>
        </section>

        <section class="text-gray-700 body-font">
          <div class="container px-8 mx-auto pt-2 lg:px-4">
            <div class="flex flex-wrap text-center">
              <div class="px-8 py-4 lg:w-1/3 md:w-full">
                <Image
                  src="/img/C2.jpg"
                  alt="Elgin Park: commerical retail and office spaces in South Surrey"
                  width={800}
                  height={280}
                  class="object-cover object-center w-full h-40 mb-6 rounded"
                />
                <h1 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Current Projects
                </h1>
                <p class="mb-4 text-base leading-relaxed"> Elgin Park is a commercial project in South Surrey and is ready for leasing.</p>
                <Link href="/projects">
                  <a
                    class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                    Find Out More
                    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                      height="20" fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div class="px-8 py-4 lg:w-1/3 md:w-full">
                <Image
                  src="/img/Elgin Park Roofing.jpg"
                  alt="Picture of a Roof"
                  width={800}
                  height={280}
                  class="object-cover object-center w-full h-40 mb-6 rounded"
                />
                <h1 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Roofing Service
                </h1>
                <p class="mb-4 text-base leading-relaxed">
                  Installing roofs for 30 years on residential, strata, and commercial projects in the Lower Mainland.
                </p>
                <Link href="/roofing">
                  <a
                    class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                    Find Out More
                    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                      height="20" fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div class="px-8 py-4 lg:w-1/3 md:w-full">
                <Image
                  src="/img/House_render.jpg"
                  alt="Vancouver residential detached house"
                  width={800}
                  height={280}
                  class="object-cover object-center w-full h-40 mb-6 rounded"
                />
                <h1 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Past Projects
                </h1>
                <p class="mb-4 text-base leading-relaxed">
                  Checkout our residential and strata projects starting from 2015
                </p>
                <Link href="/projects#past">
                  <a
                    class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                    Find Out More
                    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                      height="20" fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </body>

      <Footer />
    </>
  )
}

