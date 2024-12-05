/* eslint-disable no-unused-vars */

import "../style/HeaderUser.css";
import {useDispatch,useSelector} from "react-redux";
import {LogOut,reset} from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";

const HeaderUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector(state => state.auth);


    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    }

    // console.log(user);
    

    return (
        
        <>

            <div className="headeruser-container">

                <div className="headeruser-content">


                    <div className="logo-keterangan-user">
                        <h3>SELAMAT DATANG</h3>
                        <p>{user.user && user.user.name}</p>
                    </div>

                    <div className="control">
                        <button onClick={logout}>KELUAR</button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default HeaderUser