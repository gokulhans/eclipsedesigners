import React from 'react'

function Cta() {
    return (
        <section className="py-6 text-gray-900 nodark:text-white">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-bold leading-tight text-center lg:text-left">Order Poster Now</h1>
                <a href='https://wa.me/message/5XWWJKY6UH5EG1' className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-gray-50  nodark:bg-green-400 nodark:text-gray-900">Whatsapp</a>
            </div>
        </section>
    )
}

export default Cta