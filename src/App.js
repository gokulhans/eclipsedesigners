import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-16 pt-4'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
