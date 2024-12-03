/* eslint-disable no-unused-vars */
import "../style/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        
        <>

            <div className="sidebarcontainer">

                <div className="sidebar-keterangan">
                    <h1 className="fw-bold">ADMIN</h1>
                </div>

                <div className="sidebar-profile">

                    <div className="profilepicture">
                        <img className="profilepicture" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="profile-keterangan">
                        <h4>Nama Saya</h4>
                        <p>NamaSaya@gmail.com</p>
                    </div>

                </div>

                <div className="sidebar-nav">

                    <div className="nav-page">
                        <Link to="/admin">HOME</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to="/admin/datasalesadmin">SALES</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to="/admin/datapembelianadmin">PEMBELi</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to="/admin/databarangadmin">BARANG</Link>
                        <button>&gt;</button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Sidebar