/* eslint-disable no-unused-vars */

import "../style/LoginAdmin.css";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { LoginNonUser } from "../features/authSlice2";
import { useDispatch,useSelector } from "react-redux";

function LoginAdmin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user,isError,isSuccess,isLoading,message} = useSelector((state) => state.auth_2);
    // console.log(user.admin);
    

    useEffect(() => {

        if (user || isSuccess) {
            navigate(`/admin/${user.admin.kodeTokoAdm}`);
        }

    },[user,isError,isLoading,message])

    const Auth = (e) => {

        e.preventDefault();

        dispatch(LoginNonUser({email,password}));

    }

    return (

        <>
            
            <div className="container1-loginadmin">

                
                <div className="header-loginadmin">
                </div>

                <div className="content-loginadmin">
                    <form action="" onSubmit={Auth}>

                        <h1 className="text-white keterangan-loginadmin">LOGIN ADMIN</h1>

                        <div className="field-loginadmin">
                            
                            <label htmlFor="email" className="label-loginadmin">Email</label>
                            <div className="control-loginadmin">
                                <input type="text" className="input-loginadmin" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-loginadmin">

                            <label htmlFor="password" className="label-loginadmin">Password</label>
                            <div className="control-loginadmin">
                                <input type="password" className="input-loginadmin" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-loginadmin">
                            <button className="btn-submit-loginadmin" type="submit">Login</button>
                        </div>
                        
                    </form>

                    {/* <p className="text-white link1">Belum Punya Akun? <a className="link" href="">DAFTAR</a> </p> */}
                    <p className="text-white link1-loginadmin">Belum Punya Akun? <Link to="/daftar/admin" className="link-loginadmin">DAFTAR</Link> </p>
                    <p className="text-white link2-loginadmin"> <a className="link2-2-loginadmin" href="">lupa password?</a> </p>

                    <div className="loginlain-loginadmin">
                        <p className="text-white link3-loginadmin"> Masuk Sebagai <Link className="link2-3-loginadmin" to="/login/sales">Sales</Link> </p>
                        <p className="text-white link3-loginadmin"> Masuk Sebagai <Link className="link2-3-loginadmin" to="/login/user">User</Link> </p>
                    </div>

                </div>
                
                <div className="footer-loginadmin">

                </div>

            </div>

        </> 

    )
}

export default LoginAdmin