import Link from 'next/link'
import Image from 'next/image'
const today = new Date();


const QuoteBlock = () => {
    const quote_register = async event => {
        event.preventDefault(); // don't redirect the page


        let data = {
            Name: document.getElementById('Name').value,
            Email: document.getElementById('Email').value
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('/api/quote', options);

    }


    return (
        <>
            <div class="flex flex-col w-full mx-auto lg:w-3/5 narrow:w-full sm:flex-row  mb-6">
                <input id="Name" class="flex w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Name" type="text"></input>
                <input id="Email" class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Email" type="email"></input>
                <button class="flex items-center justify-center w-1/2 px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2" onClick={quote_register}>
                    Get a Quote
                </button>
            </div>


        </>

    );
}


export default QuoteBlock;
