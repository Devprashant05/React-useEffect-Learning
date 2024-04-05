import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";

function Show() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // const api = "https://fakestoreapi.com/products";
        axios
            .get('/products')
            .then((products) => {
                // console.log(products.data);
                setProducts(products.data);
            })
            .catch((err) => console.log(err));
    }, [products]);
    // to get products
    const getProducts = () => {};
    return (
        <>
            <div className="m-2 flex items-center justify-center">
                <button
                    onClick={getProducts}
                    className="px-3 py-2  bg-red-400 rounded-md"
                >
                    Click to fetch API
                </button>
            </div>

            <ul className="m-5 text-center flex flex-wrap gap-5 items-center justify-center">
                {products.length > 0 ? (
                    products.map((p, index) => (
                        <li
                            key={index}
                            className=" p-3 w-1/4 bg-green-400 rounded-md"
                        >
                            <div className="w-full h-60 rounded-md overflow-hidden bg-red-400 mb-2">
                                <img
                                    className="h-full w-full object-cover object-top"
                                    src={p.image}
                                    alt=""
                                />
                            </div>
                            {p.title}
                        </li>
                    ))
                ) : (
                    <h1 className="bg-green-400 p-3 rounded-md">Loading...</h1>
                )}
            </ul>
        </>
    );
}

export default Show;
