import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/country" element={<Country />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
