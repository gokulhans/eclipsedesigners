import React from 'react'

function Hero() {
    return (
        <section className=" text-gray-800 nodark:bg-gray-800 nodark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-2 pt-16 pb-8 text-center md:py-32 md:px-6 lg:px-8 xl:max-w-3xl">
                {/* <h1 className="text-gray-700 nodark:text-white leading-tight md:text-7xl text-4xl sm:text-5xl font-extrabold">Ready Made
                </h1> */}
                <h1 className="text-gray-600 nodark:text-white leading-tight md:text-7xl text-4xl sm:text-5xl font-extrabold">Social Media
                    <span className="block text-green-600 nodark:text-green-400"> Poster Design </span>
                </h1>
                <center>
                    <h3 className="text-gray-500 leading-tight md:leading-tight text-md md:text-2xl my-8 font-bold">നിങ്ങളുടെ <span className="text-green-500 nodark:text-green-400"> Business </span> ന്റെ വളർച്ചയ്ക്ക് അനുയോജ്യമായ Posters, Logos, Websites  Design  ചെയ്യുന്നു.
                    </h3>
                </center>
                {/* <p className="px-8 my-5 text-lg">Starting From 1000 ₹</p> */}
                <div className="flex flex-wrap justify-center">
                    <a href="https://wa.me/message/5XWWJKY6UH5EG1">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-600 text-gray-50 nodark:bg-green-400 nodark:text-gray-900">Contact Us</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero