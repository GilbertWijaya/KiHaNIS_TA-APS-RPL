/* eslint-disable no-unused-vars */

import "../style/HeaderAdmin.css";
import { useDispatch } from "react-redux";
import { LogOut,reset } from "../features/authSlice2";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/login/admin');
    }

    return (
        
        <>

            <div className="headeradmin-container">

                <div className="headeradmin-content">


                    <div className="logo-keterangan">
                        <img src="/logoapp.png" alt="gambar" />
                        <h1>KiHaNIS</h1>
                    </div>

                    <div className="control">
                        <button onClick={logout}>KELUAR</button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default HeaderAdmin