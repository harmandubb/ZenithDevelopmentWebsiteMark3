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

        const response = await fetch('/api/quote', options);

        if (response.status == 200) {
            toggle_quote_response(true);
        } else {
            toggle_quote_response(false);
        }

        

    }


    return (
        <>
            <form onSubmit={quote_register} id="quoteForm" class="flex flex-col w-full mx-auto mt-8 lg:w-3/5 narrow:w-full sm:flex-row ">
                <input required id="Name" class="flex w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Name" type="text"></input>
                <input required id="Email" class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Email" type="email"></input>
                <button type="sumbit" class="flex items-center justify-center w-1/2 px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Get a Quote
                </button>
            </form>

            <div id="sucess" class="z-10 hidden text-center text-white font-semibold mt-8">
                The quote request has sucessfully been submitted. We will contact you shortly. Thank you
            </div>
            <div id="fail" class="z-10 hidden text-center text-red-600 font-semibold mt-8">
                The quote request failed to submit. Please call our office to get a quote. Thank you
            </div>


        </>

    );
}


export default QuoteBlock;

function toggle_quote_response(formStatus) {

    const sucess = document.querySelector('#sucess');
    const fail = document.querySelector('#fail');


    if (formStatus == true) {
        sucess.classList.remove('hidden');
        fail.classList.add('fail');
    } else {
        fail.classList.remove('hidden');
        sucess.classList.add('fail');
    }
}

function timedRefresh(time) {
    setTimeout("location.reload(true)", time);
}
