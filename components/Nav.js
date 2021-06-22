import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ActiveLink from './ActiveLink'

const Nav = () => {
    

    <style jsx>{`
            @media screen and (max-width: 768px) {
                #menu {
                    display: block;
                }
            }
        `}</style>


    return (
        <>
            <style>{`
            @media screen and (min-width: 768px) {
                #menu {
                    display: none;
                }
            }
        `}</style>

            <div class="fixed w-screen z-20">
                <header class="text-white bg-gray-900 border-t border-b body-font ">
                    <div class="relative container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
                        <div class="flex flex-1">
                            <a class="items-center w-14 mt-3 md:mt-0 md:w-20 mb-1 md:mb-1 font-medium text-gray-900 title-font">
                                <Image
                                    src="/img/logo.gif"
                                    alt="Zenith Development Logo"
                                    width={100}
                                    height={100}
                                />
                            </a>

                            <ul class="pl-5">
                                <li class="flex text-2xl mt-3 md:mt-2 md:text-4xl lg:text-4xl font-bold">Zenith Development</li>
                                <li class="text-s lg:text-lg">No project too big, No project too small.</li>
                            </ul>

                            <div class="ml-auto mr-4 px-4 cursor-pointer md:hidden" id="burger" onClick={() => { toggle_mobile_menu() }}>
                                <svg class=" flex justify-end w-6 text-white current-fill mt-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>

                        <div class="menu flex flex-col hidden font-bold text-center " id="menu" >


                            <div class="text-center border-b-4 border-gray-900 mb-2 text-white">
                                <ActiveLink href="/" activeClassName="text-center border-b-4 border-red-500 mb-2 text-white">
                                    <a> Home </a>
                                </ActiveLink>

                            </div>



                            <div class="text-center border-b-4 border-gray-900 mb-2 text-white">
                                <ActiveLink href="/projects" activeClassName="text-center border-b-4 border-red-500 mb-2 text-white">
                                    <a> Our Projects </a>
                                </ActiveLink>


                            </div>

                            <div class="text-center border-b-4 border-gray-900 mb-2 text-white">
                                <ActiveLink href="/roofing" activeClassName="text-center border-b-4 border-red-500 mb-2 text-white">
                                    <a>Roofing Service</a>
                                </ActiveLink>

                            </div>

                            <div class="flex flex-col">

                                <Link href="/pre-reg">
                                    <button
                                        class="pt-1 pb-1 rounded-lg lg:block font-semibold text-blue-700 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none">
                                        <a>Pre-register</a>
                                    </button>
                                </Link>

                            </div>


                        </div>

                        <nav class="flex flex-wrap hidden md:block items-center justify-center text-md md:ml-auto">

                            <ActiveLink href="/" activeClassName="lg:text-lg sm:mr-5 font-bold hover:text-gray-200 border-red-500 border-b-4">

                                <a class="lg:text-lg sm:mr-5 font-bold hover:text-gray-200 border-gray-900 border-b-4">Home</a>
                            </ActiveLink>


                            <ActiveLink href="/projects" activeClassName="lg:text-lg md:mr-5 font-bold text-white hover:text-gray-200 border-red-500 border-b-4">
                                <a class="lg:text-lg md:mr-5 font-bold text-white hover:text-gray-200 border-gray-900 border-b-4">Our Projects</a>
                            </ActiveLink>

                            <ActiveLink href="/roofing" activeClassName="lg:text-lg md:mr-5 font-bold text-white hover:text-gray-200 border-red-500 border-b-4">
                                <a class="lg:text-lg md:mr-5 font-bold text-white hover:text-gray-200 border-gray-900 border-b-4">Roofing Service</a>
                            </ActiveLink>

                            <Link href="/pre-reg">
                                <button class="hidden lg:block items-center px-2 py-2 mt-4 ml-4 font-semibold text-gray-900 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none">

                                    <a> Pre-register</a>


                                </button>
                            </Link>
                        </nav>


                    </div>
                </header>
            </div>





        </>

    );
}

export default Nav;

function toggle_mobile_menu() {

    const menu = document.querySelector('#menu');


    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('text-gray-900');
    } else {
        menu.classList.add('hidden');
    }
}

