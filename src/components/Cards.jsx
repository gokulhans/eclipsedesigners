import React from 'react'
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>
            <div class="container mb-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">

                    <Link to={"/project/1"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white dark:text-white"> Blog App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">My SQL</p>
                                    {/* <p class="text-gray-800 dark:text-gray-200">Authentication</p> */}
                                    {/* <p class="text-gray-800 dark:text-gray-200">CRUD Operations</p> */}
                                    {/* <p class="text-gray-800 dark:text-gray-200">Malayalam Explanation Video</p> */}
                                    {/* <p class="text-gray-800 dark:text-gray-200">Project Demo Video</p> */}
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/2"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Youtube Clone </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                    {/* <p class="text-gray-800 dark:text-gray-200">Mongo Db</p>
                                    <p class="text-gray-800 dark:text-gray-200">Express Js</p>
                                    <p class="text-gray-800 dark:text-gray-200">Node js</p>
                                    <p class="text-gray-800 dark:text-gray-200">Redux</p>
                                    <p class="text-gray-800 dark:text-gray-200">JWT Token, Cookies</p>
                                    <p class="text-gray-800 dark:text-gray-200">Upload Video</p>
                                    <p class="text-gray-800 dark:text-gray-200">Account Managment</p>
                                    <p class="text-gray-800 dark:text-gray-200">Project Demo Video</p> */}
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/3"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Social Media App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/4"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> OTT Platform App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">Netflix Demo</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/5"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Social Media App 2 </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/6"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Food Ordering App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/7"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Private Chat App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Firebase</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/8"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> E Commerce App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                    <p class="text-gray-800 dark:text-gray-200">Payment Gateway</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/9"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Travel Map App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/10"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Inventory Management App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>

                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/11"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> E Commerce App 2</h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/12"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Quiz App </h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/13"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Blog App 2</h2>

                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/14"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border dark:border-none dark:shadow-gray-700 text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-xl font-bold tracking-wide mb-5 dark:text-white"> Chat App 2</h2>
                                    <p class="text-gray-800 dark:text-gray-200">React JS</p>
                                    <p class="text-gray-800 dark:text-gray-200">Mern Stack</p>
                                    <p class="text-gray-800 dark:text-gray-200">Socket.io</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-green-400 dark:text-gray-900">Click here for Demo Video</button>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Cards