import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Terms from "./components/Terms";
import Ppolicy from "./components/Ppolicy";
import Joblisting from "./components/Joblisting";

import { Link, Route, Routes } from "react-router-dom";
import Jobsearch from "./components/Jobsearch";

function App() {
  return (
    <>
      <Header />
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/job_listing"
            element={
              <>
                <Joblisting />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/job_search"
            element={
              <>
                <Jobsearch />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/terms_of_service"
            element={
              <>
                <Terms />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/privacy_policy"
            element={
              <>
                <Ppolicy />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
