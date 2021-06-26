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

    <Nav />
    Space holder


    <div class = "w-screen">

    <section class="lg:mt-28 mt-32 text-gray-700 body-font">
        <div class = 'text-gray-900'>
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

