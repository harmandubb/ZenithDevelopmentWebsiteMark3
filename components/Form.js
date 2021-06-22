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

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('/api/form',options);

    }


    return (
        <>
            <div class="pt-8 px-20">
                <form onSubmit={register} id="preregForm">


                    <section class="text-gray-700 ">
                        <div class="container px-8 pb-2 mx-auto lg:px-4">
                            <div
                                class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                                <div class="relative ">
                                    <label htmlFor="Name" class="text-sm leading-7 text-gray-600">Your name</label>
                                    <input type="Name" id="Name" name="Name" placeholder="Name"
                                        class="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></input>
                                </div>
                                <div class="relative ">
                                    <label htmlFor="Email" class="text-sm leading-7 text-gray-600">Email address</label>
                                    <input type="Email" id="Email" name="Email" placeholder="Email"
                                        class="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></input>
                                </div>
                                <div class="relative mb-4 ">

                                    <label htmlFor="Project" id="Project" class="text-sm leading-7 text-gray-600">Project to Pre-register for:</label>
                                    <select id="Project" name="Project"
                                        class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option>Select an Option</option>
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
                                    class="inline-flex w-full px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">Pre-Register
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 my-auto ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                </form>


            </div>


        </>

    );
}


export default Form;
