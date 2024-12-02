/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin.jsx";
import HeaderUser from "../components/HeaderUser.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../style/TemplateUser.css";

const TemplateUser = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        
        <>
            <div className="header">
                <HeaderUser />
            </div>

            {/* <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Sidebar />
            </div> */}
            

            <div className="testing-content">
                {/* <button className="button" onClick={toggleSideBar}>{isOpen ? ">" : "<"}</button> */}
                {children}
            </div>

            <div className="footer">
                <Footer />
            </div>

        </>

    )
}

export default TemplateUser