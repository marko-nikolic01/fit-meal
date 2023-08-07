import { useState } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Page.css'

function Page() {
    const [data, setData] = useState({ id: 2, name: "joca" });

    const location = useLocation();
    const state = location.state?.data;

    return (
        <>
            <Link to="/page" state={{ data: data }}>Page</Link>
            <Link to="/">Home</Link>
            <p>{state.id} {state.name}</p>
        </>
    )
}

export default Page