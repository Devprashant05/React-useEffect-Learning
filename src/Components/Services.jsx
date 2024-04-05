import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";

function Services() {
    const [first, setFirst] = useState("This is normal data");
    const [second, setSecond] = useState("This is large data");

    const getUsers = () => {
        // const api = "https://fakestoreapi.com/users";
        axios
            .get("/users")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getUsers();
        console.log("Services page is Created");
        return () => {
            console.log("Services page is Destroyed");
        };
    }, [second]);
    return (
        <div className="px-10 mt-5">
            <h1>{first}</h1>
            <button
                onClick={() => setFirst("Normal data has changed")}
                className="px-3 py-1 rounded-md bg-red-400 mt-3 mb-3"
            >
                Change Normal Data
            </button>

            <h1>{second}</h1>
            <button
                onClick={() => setSecond("Large data has changed")}
                className="px-3 py-1 rounded-md bg-green-400 mt-3 mb-3"
            >
                Change Large Data
            </button>
        </div>
    );
}

export default Services;
