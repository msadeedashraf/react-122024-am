import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Mainsection from "./components/Mainsection";
import Joblist from "./components/Joblist";
import Jobsearch from "./components/Jobsearch";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <Navbar/>

    <Routes>

        <Route path="/" element={<Mainsection />} />
        <Route path="/job_listing" element={<Joblist />} />
        <Route path="/job_search" element={<Jobsearch />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term_service" element={<Terms />} />
        <Route path="/contact_us" element={<Contact />} />


    </Routes>

    <Footer/>
  
    </>
  )
}

export default App
