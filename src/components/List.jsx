import React from 'react'
import { Link } from 'react-router-dom';

function List() {
    return (
        <>
            <h2 class="py-6 text-3xl md:text-3xl font-bold leading-none ml-8 dark:text-gray-200">Ready Made Projects</h2>

            <div class="container mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">

                    <a href="https://wa.me/message/5XWWJKY6UH5EG1" class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Blogging Website</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Youtube Clone </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Social Media </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   OTT Platform</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Food Ordering Service </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Private Chat </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Travel Map App </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Inventory Management</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Quiz App </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Library Managment </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Weather App </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Dating Website</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Car Rental Service</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Online Voting System </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Movies Booking System</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   School Managment</h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Attendance System </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Employee Management </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   College bot project </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Health consulting system </h2>
                                    <h2 class="text-xl font-semibold mb-3 dark:text-gray-400"><span className='text-green-600 font-bold dark:text-green-400 mr-3'><i class="fa-solid fa-arrow-right">  </i> </span>   Event Managment Service</h2>
                                    

                                    {/* <p class="text-gray-800">Connect with us. We will make it happen.. </p> */}
                                </div>
                                <button type="button" class="text-white text-xl font-bold bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 dark:text-black dark:bg-green-400 rounded-lg px-5 py-2.5 inline-flex justify-center w-full text-center">Book Project</button>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}

export default List