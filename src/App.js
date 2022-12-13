import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <div className='pt-16 dark:bg-gray-800'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project/1" element={<Project title={"Blog App"} link={"https://www.youtube.com/embed/9qoH0Ur9mAU"} />} />
          <Route path="/project/2" element={<Project title={"Youtube Clone"} link={"https://www.youtube.com/embed/ufIDKdV8FwA"} />} />
          <Route path="/project/3" element={<Project title={"Social Media App"} link={"https://www.youtube.com/embed/bEp3M0La9yU"} />} />
          <Route path="/project/4" element={<Project title={"OTT Platform App"} link={"https://www.youtube.com/embed/x3M2am9Ab3k"}/>} />
          <Route path="/project/5" element={<Project title={"Social Media App 2"} link={"https://www.youtube.com/embed/feCfSpCoL40"}/>} />
          <Route path="/project/6" element={<Project title={"Food Ordering App"} link={"https://www.youtube.com/embed/cyu6BguZObM"}/>} />
          <Route path="/project/7" element={<Project title={"Private Chat App"} link={"https://www.youtube.com/embed/43SAsD2IbQY"}/>} />
          <Route path="/project/8" element={<Project title={"E Commerce App"} link={"https://www.youtube.com/embed/X7Oh850b-iQ"}/>} />
          <Route path="/project/9" element={<Project title={"Travel Map App"} link={"https://www.youtube.com/embed/K4428hWIpoI"}/>} />
          <Route path="/project/10" element={<Project title={"Inventory Management App"} link={"https://www.youtube.com/embed/13Uxsg8bKoM"}/>} />
          <Route path="/project/11" element={<Project title={"E Commerce App 2"} link={"https://www.youtube.com/embed/7Kyxie7ZM9g"}/>} />
          <Route path="/project/12" element={<Project title={"Quiz App"} link={"https://www.youtube.com/embed/q0f5f6Dm7tk"}/>} />
          <Route path="/project/13" element={<Project title={"Blog App 2"} link={"https://www.youtube.com/embed/6zHmTUHkuZA"}/>} />
          <Route path="/project/14" element={<Project title={"Chat App 2"} link={"https://www.youtube.com/embed/B0mX-y6w7mE"}/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
