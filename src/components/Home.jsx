import React from 'react'
import Cards from './Cards'
import Cta from './Cta';
import Feature from './Feature'
import Hero from './Hero';
import Footer from './Footer';
import List from './List';

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <List />
      <Cta />
      {/* <h2 class="py-6 text-3xl md:text-3xl font-bold leading-none ml-8 dark:text-white">Project Demo Preview</h2> */}

      <Cards />
      <Cta />

      <div className="text-3xl p-3 px-4 fixed bottom-5 right-5 bg-green-600 text-white rounded-full dark:bg-green-500">
        <a href="https://wa.me/message/5XWWJKY6UH5EG1" class="" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
      <Footer />

    </>
  )
}

export default Home