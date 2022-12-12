import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-16 pt-4'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      <Footer />
      <div className="text-3xl p-3 px-4 fixed bottom-5 right-5 bg-green-600 text-white rounded-full">
        <a href="https://wa.me/message/5XWWJKY6UH5EG1" class="" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
    </>
  );
}

export default App;
