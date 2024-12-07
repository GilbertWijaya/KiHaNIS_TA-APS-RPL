/* eslint-disable no-unused-vars */
import "../style/Sidebar.css";
import { Link,useParams } from "react-router-dom";
import { getMe } from "../features/authSlice2";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

const Sidebar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const {user} = useSelector((state) => state.auth_2);

    return (
        
        <>

            <div className="sidebarcontainer">

                <div className="sidebar-keterangan">
                    <h1 className="fw-bold">ADMIN</h1>
                </div>

                <div className="sidebar-profile">

                    <div className="profilepicture">
                        <img className="profilepicture" src={ `${user.img}` ||  `/defaultpicture500.jpg`} alt="gambar" />
                    </div>

                    <div className="profile-keterangan">
                        <h4>{user.admin.name}</h4>
                        <p>{user.admin.email}</p>
                    </div>

                </div>

                <div className="sidebar-nav">

                    <div className="nav-page">
                        <Link to={`/admin/${user.admin.kodeTokoAdm}`}>HOME</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to={`/admin/datasalesadmin/${user.admin.id}`}>SALES</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to={`/admin/datapembelianadmin/${user.admin.id}`}>PEMBELi</Link>
                        <button>&gt;</button>
                    </div>

                    <div className="nav-page">
                        <Link to={`/admin/databarangadmin/${user.admin.id}`}>BARANG</Link>
                        <button>&gt;</button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Sidebar