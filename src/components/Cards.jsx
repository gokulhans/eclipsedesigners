import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>
            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">

                    <Link to={"/project/1"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Blog App </h2>
                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">My SQL</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Malayalam Explanation Video</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/2"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Blog App </h2>
                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">My SQL</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Malayalam Explanation Video</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>
                    

                </div>
            </div>
        </>
    )
}

export default Cards