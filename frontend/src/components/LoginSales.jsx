/* eslint-disable no-unused-vars */

import "../style/LoginSales.css";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { LoginNonUser,reset } from "../features/authSlice2";
import { useDispatch,useSelector } from "react-redux";

function LoginSales() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {user,isError,isSuccess,isLoading,message} = useSelector((state) => state.auth_2);
    // console.log(user.sales);
    

    useEffect(() => {

        if (user || isSuccess) {
            navigate(`/sales/${user.sales.kodeTokoAdm}`);
        }

        // dispatch(reset());

    },[user,isError,isLoading,message])

    const Auth = (e) => {
        e.preventDefault();

        dispatch(LoginNonUser({email,password}));

    }

    return (

        <>
            
            <div className="container1-loginsales">

                
                <div className="header-loginsales">
                </div>

                <div className="content-loginsales">
                    <form action="" onSubmit={Auth}>

                        <h1 className="text-white keterangan-loginsales">LOGIN SALES</h1>

                        <div className="field-loginsales">
                            
                            <label htmlFor="email" className="label-loginsales">Email</label>
                            <div className="control-loginsales">
                                <input type="text" className="input-loginsales" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-loginsales">

                            <label htmlFor="password" className="label-loginsales">Password</label>
                            <div className="control-loginsales">
                                <input type="password" className="input-loginsales" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-loginsales">
                            <button className="btn-submit-loginsales" type="submit">Login</button>
                        </div>
                        
                    </form>

                    {/* <p className="text-white link1">Belum Punya Akun? <a className="link" href="">DAFTAR</a> </p> */}
                    <p className="text-white link1-loginsales">Belum Punya Akun? <Link to="/daftar/sales" className="link-loginsales">DAFTAR</Link> </p>
                    <p className="text-white link2-loginsales"> <Link className="link2-2-loginsales" to="">lupa password?</Link> </p>

                    <div className="loginlain-loginsales">
                        <p className="text-white link3-loginsales"> Masuk Sebagai <Link className="link2-3-loginsales" to="/login/admin">Admin</Link> </p>
                        <p className="text-white link3-loginsales"> Masuk Sebagai <Link className="link2-3-loginsales" to="/login/user">User</Link> </p>
                    </div>

                </div>
                
                <div className="footer-loginsales">

                </div>

            </div>

        </> 

    )
}

export default LoginSales