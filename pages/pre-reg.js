import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Swiper from '../components/Main_Carousel'
import Form from '../components/Form'

export default function Pre_Reg() {
  return (
    <>
      <Head>

        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=devide-width, initial-scale=1" />
        <title>Pre-Register - Zenith Development</title>
        <meta name="title" content="Pre-Register - Zenith Development" />
        <meta name="description" content="Pre-Resiter to get contacted by us for a viewing for any of our properties" />
        <meta name="msapplication-TileColor" content="#da2c30" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://zenith-development.com/pre-reg" />
        <meta name="og:title" content="Pre-Refister - Zenith Development" />
        <meta name="og:description" content="Pre-Resiter to get contacted by us for a viewing for any of our properties" />
        <meta name="keywords" content="Pre-Register, Lowermainland, Surrey, Vancouver, Greater Vancouver, Metro Vancouver, residential, commercial, strata, living, business, retail, Canada, Elgin Park, King George, Crest Lane, townhouses, condos, apartments, new homes for sale, new properties for sale, listings " />
      </Head>

      <Nav />
      Space holder


      <div class="w-screen">

        <section class="lg:mt-32 mt-36 text-gray-700 body-font">
          <div class='text-gray-900'>
            <p class="text-4xl font-bold tracking-tighter text-center text-blue-800  lg:text-5xl title-font">
              Hi! Ready to Pre-Register for a viewing?
            </p>
          </div>
        </section>

      </div>


      <Form />


      <Footer />
    </>
  )
}

