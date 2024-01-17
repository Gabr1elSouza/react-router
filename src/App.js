import "./App.css";

//config react router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//react
import { useState } from "react";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

//components
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import SearchForm from "./components/SearchForm";

function App() {
  const [result, setResults] = useState([]);
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm setResults={setResults} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          {/*nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search results={result} />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          {/*No match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
