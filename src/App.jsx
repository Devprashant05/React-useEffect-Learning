import axios from "axios";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Services from "./Components/Services";

function App() {
    // // to add products
    // const addProducts = () => {
    //     const api = "https://fakestoreapi.com/products";
    //     axios
    //         .post(api, {
    //             title: "Iphone 18",
    //             price: 40.5,
    //             description: "Test iphone made by Prashant",
    //             image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    //             category: "electronic",
    //         })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err));
    // };

    return (
        <>
            <nav className="px-10 py-4 bg-green-300 flex justify-start items-center gap-5">
                <Link to="/">Home</Link>
                <Link to="/show">Show</Link>
                <Link to="/services">Services</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/show" element={<Show />}></Route>
                <Route path="/services" element={<Services />}></Route>
            </Routes>
        </>
    );
}

export default App;

{
    /* <button onClick={addProducts} className="px-3 py-2  bg-red-400 rounded-md">
    Click to Add Products
</button>; */
}
