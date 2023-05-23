import React, { useState } from 'react';

function Card({ image, alt }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="md:p-3">
                <div className="bg-white shadow-2xl rounded-xl">
                    <img
                        src={image}
                        className="rounded-xl cursor-pointer"
                        alt={alt}
                        onClick={openModal}
                    />
                    {/* <center className="flex items-center justify-around">
                        <a href='https://wa.me/message/5XWWJKY6UH5EG1' target='_blank' className="px-8 py-1 mt-2 text-xs font-semibold rounded bg-green-600 text-gray-50">Order Now</a>
                    </center> */}
                </div>
            </div>

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-4 rounded-xl max-w-full max-h-full m-4">
                        <img src={image} className="h-80 w-full rounded-xl" alt={alt} />
                        <center className="flex items-center justify-around">
                            <a href='https://wa.me/message/5XWWJKY6UH5EG1' target='_blank' className="px-8 py-1 mt-4 text-md font-semibold rounded bg-green-600 text-gray-50">Order Now</a>
                            <button onClick={closeModal} className="px-8 py-1 mt-4 text-md font-semibold rounded bg-blue-600 text-gray-50">
                                Close
                            </button>
                        </center>
                    </div>
                </div>
            )}
        </>
    );
}

function Cards() {
    const cards = [];
    for (let i = 0; i < 53; i++) {
        const image = `posters/${i + 1}.jpg`;
        cards.push(<Card image={image} key={i} />);
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-16 md:py-8" id="container">
            {cards}
        </div>
    );
}
export default Cards;
