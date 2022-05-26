import Link from 'next/link'
import Image from 'next/image'



const Footer = () => {

    return (
        <>

            <footer class="mt-2 text-gray-700 bg-white border-t body-font">
                <div
                    class="container flex flex-col flex-wrap p-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">

                    <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left ">
                        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h1 class="mb-3 text-sm font-semibold tracking-widest text-blue-700 uppercase title-font">Company
                            </h1>
                            <nav class="mb-10 list-none">
                                <li>
                                    <Link href="/">
                                        <a class="text-sm text-gray-600 hover:text-gray-800">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        <a class="text-sm text-gray-600 hover:text-gray-800">Current Projects</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/roofing">
                                        <a class="text-sm text-gray-600 hover:text-gray-800">Roofing Service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        <a class="text-sm text-gray-600 hover:text-gray-800">Portfolio</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h1 class="mb-3 text-sm font-semibold tracking-widest text-blue-800 uppercase title-font">
                                Contact
                            </h1>
                            <nav class="mb-10 list-none">
                                <li>
                                    <p class="text-sm text-gray-600">
                                        Email: info@zenithdevelopment.ca
                                    </p>
                                </li>
                                <li>
                                    <p class="text-sm text-gray-600">
                                        Office: 604-498-4615
                                    </p>
                                </li>
                            </nav>
                            <div class="flex ">
                                <Link href="/pre-reg">
                                    <button
                                        class="inline-flex w-full px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">Pre-Register
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 my-auto ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>

                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blueGray-900">
                    <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
                        <p class="text-sm text-center text-gray-600 sm:text-left ">© Zenith Development 2021
                        </p>
                        <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                            <a class="text-white hover:text-blue-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-white hover:text-blue-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                    </path>
                                </svg>
                            </a>
                            <a class="ml-4 text-white hover:text-blue-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>



            </footer>

        </>

    );
}

export default Footer;
