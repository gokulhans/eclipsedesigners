import React from 'react'
import Cards from './Cards'
import Cta from './Cta';
import Feature from './Feature'
import Hero from './Hero';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Cards />
      <Cta />
      <div className="text-3xl p-3 px-4 fixed bottom-5 right-5 bg-green-600 text-white rounded-full">
        <a href="https://wa.me/message/5XWWJKY6UH5EG1" class="" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
      <Footer />

    </>
  )
}

export default Home