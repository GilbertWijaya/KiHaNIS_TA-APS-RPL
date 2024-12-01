/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../style/Template.css";

const TemplateAdmin = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        
        <>
            <div className="templateheader">
                <HeaderAdmin />
            </div>

            <div className={`templatesidebar ${isOpen ? 'open' : ''}`}>
                <Sidebar />
            </div>
            

            <div className="template-content">
                {/* <button className="button" onClick={toggleSideBar}>{isOpen ? ">" : "<"}</button> */}
                {children}
            </div>

            <div className="template">
                <Footer />
            </div>

        </>

    )
}

export default TemplateAdmin