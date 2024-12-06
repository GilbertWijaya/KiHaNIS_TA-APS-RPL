/* eslint-disable no-unused-vars */

import "../style/HeaderUser.css";
import {useDispatch,useSelector} from "react-redux";
import {LogOut,reset} from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";
import { useEffect } from "react";

const HeaderUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const {user} = useSelector(state => state.auth);
    const state = useSelector((state) => state.auth_2);
    // console.log(state.user.sales.name);

    const username = (user?.user?.name) || (state?.user?.sales?.name);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    }

    return (
        
        <>

            <div className="headeruser-container">

                <div className="headeruser-content">


                    <div className="logo-keterangan-user">
                        <h3>SELAMAT DATANG</h3>
                        <p>{username}</p>
                        {/* <p>{(user.user && user.user.name) || (state.user.sales && state.user.sales.name)}</p> */}
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