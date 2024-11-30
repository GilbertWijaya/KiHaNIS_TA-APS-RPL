/* eslint-disable no-unused-vars */

import "../style/LoginSales.css";
import { Link } from "react-router-dom";

function LoginSales() {
    return (

        <>
            
            <div className="container1-loginsales">

                
                <div className="header-loginsales">
                </div>

                <div className="content-loginsales">
                    <form action="">

                        <h1 className="text-white keterangan-loginsales">LOGIN SALES</h1>

                        <div className="field-loginsales">
                            
                            <label htmlFor="email" className="label-loginsales">Email</label>
                            <div className="control-loginsales">
                                <input type="text" className="input-loginsales" placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-loginsales">

                            <label htmlFor="password" className="label-loginsales">Password</label>
                            <div className="control-loginsales">
                                <input type="password" className="input-loginsales" placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-loginsales">
                            <button className="btn-submit-loginsales">Login</button>
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