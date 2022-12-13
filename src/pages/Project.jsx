import React, { useEffect } from 'react'

function Project({ link, title }) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }, [])
    return (
        <>
            <h2 class="mb-8 text-3xl md:text-4xl font-bold leading-none text-center text-green-600 dark:text-green-400">{title}</h2>

            <h2 class="my-8 mt-12 ml-5 text-2xl md:text-3xl font-bold leading-none md:ml-16 dark:text-white">Demo Video</h2>

            <div className='mt-3 flex items-center justify-center'>
                <iframe className='w-screen h-60 md:w-2/4 md:h-96 ' src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="px-4 pb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 text-gray-800">

                <h2 class="py-6 pt-8 text-2xl md:text-3xl font-bold leading-none dark:text-white">Technologies Used</h2>

                <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>React JS</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Firebase</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Node Js</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Mongo db</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Express Js</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Socket IO</span>
                    </li>
                </ul>

                {/* <h2 class="py-6 text-2xl md:text-3xl font-bold leading-none">Features </h2>

                <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span></span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Authentication</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Crud Operation</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <span>Login/SignUp Functions</span>
                    </li>
                </ul> */}



                <h2 class="py-8 text-2xl md:text-3xl font-bold leading-none dark:text-white">Bundle Contain</h2>

                <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free Project Source Code</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free Hosting </span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free Domain</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Malayalam Explanation Video</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free Support For 6 Month</span>
                    </li>
                    <li class="flex items-center space-x-2 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-green-600">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Customisable for your need </span>
                    </li>
                </ul>


            </div>

            <div className="text-xl fixed bottom-5 right-5 left-5 bg-green-600 text-white rounded-md z-20">
                <a href='https://wa.me/message/5XWWJKY6UH5EG1' class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-gray-50 dark:text-black dark:bg-green-500">Book This Project Now</a>
            </div>
        </>
    )
}

export default Project