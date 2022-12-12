import React from 'react'
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
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Youtube Clone </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node js</p>
                                    <p class="text-gray-800">Redux</p>
                                    <p class="text-gray-800">JWT Token, Cookies</p>
                                    <p class="text-gray-800">Upload Video</p>
                                    <p class="text-gray-800">Account Managment</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/3"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Social Media App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node js</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">Like,Follow</p>
                                    <p class="text-gray-800">Upload Post</p>
                                    <p class="text-gray-800">Account Managment</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/4"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> OTT Platform App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node js</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">Upload Video</p>
                                    <p class="text-gray-800">Send Message</p>
                                    <p class="text-gray-800">IMDB Api</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/5"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Social Media App 2 </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">My SQL</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/6"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Food Ordering App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Next JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Location</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/7"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Private Chat App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Firebase</p>
                                    <p class="text-gray-800">Real Time DataBase</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    {/* <p class="text-gray-800">Malayalam Explanation Video</p> */}
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/8"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> E Commerce App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo DB</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">JWT</p>
                                    <p class="text-gray-800">Stripe</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/9"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Travel Map App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">Mapbox</p>
                                    <p class="text-gray-800">React Hooks</p>
                                    <p class="text-gray-800">Full stack App</p>
                                    <p class="text-gray-800">Authentication</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/project/10"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Inventory Management App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">React Hooks</p>
                                    <p class="text-gray-800">Full stack App</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/11"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> E Commerce App 2</h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">Strapi</p>
                                    <p class="text-gray-800">Stripe</p>
                                    <p class="text-gray-800">React Hooks</p>
                                    <p class="text-gray-800">Full stack App</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/12"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Quiz App </h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">React Hooks</p>
                                    <p class="text-gray-800">Full stack App</p>
                                    <p class="text-gray-800">CRUD Operations</p>
                                    <p class="text-gray-800">Project Demo Video</p>
                                </div>
                                <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/project/13"} class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div class="rounded-md shadow-lg border text-gray-800">
                            <div class="flex flex-col justify-between p-6 space-y-8">
                                <div class="space-y-2">
                                    <h2 class="text-3xl font-bold tracking-wide mb-5"> Blog App 2</h2>

                                    <p class="text-gray-800">React JS</p>
                                    <p class="text-gray-800">Mongo Db</p>
                                    <p class="text-gray-800">Express Js</p>
                                    <p class="text-gray-800">Node Js</p>
                                    <p class="text-gray-800">React Hooks</p>
                                    <p class="text-gray-800">Full stack App</p>
                                    <p class="text-gray-800">Upload Post Edit Post</p>
                                    <p class="text-gray-800">CRUD Operations</p>
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