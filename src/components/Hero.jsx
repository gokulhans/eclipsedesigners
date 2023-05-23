import React from 'react'

function Hero() {
    return (
        <section className=" text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-2 pt-16 pb-8 text-center md:py-32 md:px-6 lg:px-16 xl:max-w-3xl">
                {/* <h1 className="text-gray-700 dark:text-white leading-tight md:text-7xl text-4xl sm:text-5xl font-extrabold">Ready Made
                </h1> */}
                <h1 className="text-gray-600 dark:text-white leading-tight md:text-7xl text-4xl sm:text-5xl font-extrabold">Social Media
                    <span className="text-green-600 dark:text-green-400"> Poster Design </span>
                </h1>
                {/* <p className="px-8 my-5 text-lg">Starting From 1000 ₹</p> */}
                <div className="flex flex-wrap justify-center mt-8">
                    <a href="https://wa.me/message/5XWWJKY6UH5EG1">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-600 text-gray-50 dark:bg-green-400 dark:text-gray-900">Get started</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero