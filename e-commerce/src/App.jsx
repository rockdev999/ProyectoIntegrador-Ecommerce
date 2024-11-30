import Navbar from "./components/nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Carrito from "./pages/Carrito";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ProductProvider } from "./context/ProductTotalPrice";
import CreateAccount from "./components/singup/CreateAccount";
import { ValidationRoute } from "./context/ValidationRoute";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ProductProvider>
        <ValidationRoute>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
        </ValidationRoute>
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
