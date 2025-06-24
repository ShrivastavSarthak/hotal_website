import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Home } from "./pages/Home/home";
import Property from "./pages/properties/property";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Property />} />
        </Routes>
      </BrowserRouter>
      <Footer  />
    </>
  );
}

export default App;
