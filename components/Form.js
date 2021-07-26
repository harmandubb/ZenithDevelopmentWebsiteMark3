import Link from 'next/link'
import Image from 'next/image'

const today = new Date();


const Form = () => {
    const register = async event => {
        event.preventDefault(); // don't redirect the page



        let formData = new FormData(preregForm);

        let data = {
            Name: formData.get('Name'),
            Email: formData.get('Email'),
            Project: formData.get('Project'),
            Message: formData.get('Message')
        };

        console.log("Data Collected:", data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'https://zenith-development-website-mark3.vercel.app/',
                'Access-Control-Allow-Origin': '*/',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),

        };

        console.log("Options being used for the POST:", options);


        fetch('/api/form', options)
            .then((response) => {
                console.log("Fetch was sucessful:", response);
                if (response.status == 200) {
                    toggle_form_response(true);
                } else {
                    toggle_form_response(false);
                }
            })
            .catch((err) =>
                console.log("Fetch returned an error:", err));








    }


    return (
        <>
            <div class="md:pt-8 px-4">
                <form onSubmit={register} id="preregForm">


                    <section class="text-gray-700 ">
                        <div class="container pb-2 mx-auto lg:px-4">
                            <div
                                class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-3/4 md:ml-auto md:mt-0">
                                <div class="relative ">
                                    <label htmlFor="Name" class="text-sm leading-7 text-gray-600">Your name</label>
                                    <input required type="Name" id="Name" name="Name" placeholder="Name"
                                        class="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></input>
                                </div>
                                <div class="relative ">
                                    <label htmlFor="Email" class="text-sm leading-7 text-gray-600">Email address</label>
                                    <input required type="Email" id="Email" name="Email" placeholder="Email"
                                        class="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></input>
                                </div>
                                <div class="relative mb-4 ">

                                    <label required htmlFor="Project" id="Project" class="text-sm leading-7 text-gray-600">Project to Pre-register for:</label>
                                    <select id="Project" name="Project"
                                        class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option disabled="disabled">Select an Option</option>
                                        <option value="Elgin Park">Elgin Park</option>
                                        <option value="King George">King George</option>
                                        <option value="North Vancouver">North Vancouver</option>
                                    </select>

                                </div>
                                <div class="relative ">
                                    <textarea type="Message" id="Message" name="Message" placeholder="Tell us what you are looking for"
                                        class="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
                                </div>
                                <button
                                    class="inline-flex lg:w-1/4 md:w-1/4 w-full px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">Pre-Register
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 my-auto ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                </form>
                <div id="sucess" class="hidden text-center text-green-700 font-semibold">
                    The pre-register form has sucessfully been submitted. We will contact you shortly. Thank you
                </div>
                <div id="fail" class="hidden text-center text-red-700 font-semibold">
                    The pre-register form failed to submit. Please call our office to pre-register. Thank you
                </div>


            </div>


        </>

    );
}


export default Form;

function toggle_form_response(formStatus) {

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
