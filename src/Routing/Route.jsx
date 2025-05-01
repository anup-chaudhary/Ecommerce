import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import About from '../Pages/About';
import Team from '../Pages/Team';
import Signup from '../Component/Signup';
import Login from '../Component/Login';
import Navigation from '../Component/Navigation';
import Cart from '../Context/Cart';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Foot';

const Routing = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products/');
            const result = await response.json();
            setData(result);
            setFilteredData(result);
            setCartItem(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchInfo(); // ✅ runs only once
    }, []);

    return (
        <>
            <Navigation data={data} setFilteredData={setFilteredData} />
            <Routes>
                <Route path='/' element={<Home filteredData={filteredData} />} />
                <Route path='/about' element={<About />} />
                <Route path='/Team' element={<Team />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Cart' element={<Cart cartItem={cartItem} />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Routing;
