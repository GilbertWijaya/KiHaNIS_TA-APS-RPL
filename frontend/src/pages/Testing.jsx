/* eslint-disable no-unused-vars */
import { useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../style/Testing.css";

const Testing = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        
        <>
            <div className="header">
                <HeaderAdmin />
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Sidebar />
            </div>
            

            <div className="testing-content">
                {/* <button className="button" onClick={toggleSideBar}>{isOpen ? ">" : "<"}</button> */}
                <h1>Testing</h1>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                
            </div>

            <div className="footer">
                <Footer />
            </div>

        </>

    )
}

export default Testing