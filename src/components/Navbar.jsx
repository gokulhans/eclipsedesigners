import React from 'react'

function Navbar() {
    return (
        <nav class="bg-white px-2 sm:px-4 py-4 nodark:bg-gray-800 fixed w-full z-20 top-0 left-0 shadow nodark:border-gray-600">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" class="flex items-center">
                    <span class="pl-3 text-green-700 self-center text-xl font-bold whitespace-nowrap nodark:text-white">Eclipse Designers</span>
                </a>
                <div class="flex md:order-2">
                    <a href='https://wa.me/message/5XWWJKY6UH5EG1' type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-3 py-2 rounded-full text-center mr-3 md:mr-0 nodark:bg-green-500 nodark:text-black nodark:hover:bg-green-700 nodark:focus:ring-green-800"> <i class="fa fa-whatsapp "></i> </a>
                    {/* <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 nodark:text-gray-400 nodark:hover:bg-gray-700 nodark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button> */}
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white nodark:bg-gray-800 md:nodark:bg-gray-900 nodark:border-gray-700">
                        {/* <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 nodark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:nodark:hover:text-white nodark:text-gray-400 nodark:hover:bg-gray-700 nodark:hover:text-white md:nodark:hover:bg-transparent nodark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:nodark:hover:text-white nodark:text-gray-400 nodark:hover:bg-gray-700 nodark:hover:text-white md:nodark:hover:bg-transparent nodark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:nodark:hover:text-white nodark:text-gray-400 nodark:hover:bg-gray-700 nodark:hover:text-white md:nodark:hover:bg-transparent nodark:border-gray-700">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar