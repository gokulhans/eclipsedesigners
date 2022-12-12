import React from 'react'

function Card(data) {
    return (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div class="rounded-md shadow-md text-gray-800">
                {/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> */}
                <div class="flex flex-col justify-between p-6 space-y-8">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold tracking-wide">lectus {data}</h2>
                        <p class="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Click here for More Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card