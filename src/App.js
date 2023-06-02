import './App.css';
import Cover from './component/Cover';
import NavBar from './component/NavBar';
import AboutUs from './component/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route>
              <Route path='/' element={<Cover />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Route>
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );

}

export default App;
