import "../style/Sidebar.css";

const Sidebar = () => {
    return (
        
        <>

            <div className="sidebarcontainer">

                <div className="sidebar-keterangan">
                    <h1 className="fw-bold">ADMIN</h1>
                </div>

                <div className="sidebar-profile">

                    <div className="profilepicture">
                        <img className="profilepicture" src="./public/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="profile-keterangan">
                        <h4>Nama Saya</h4>
                        <p>NamaSaya@gmail.com</p>
                    </div>

                </div>

                <div className="sidebar-nav">

                    <div className="nav-page">
                        <a href="">HOME</a>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <a href="">SALES</a>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <a href="">PEMBELi</a>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <a href="">BARANG</a>
                        <button>&gt;</button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Sidebar