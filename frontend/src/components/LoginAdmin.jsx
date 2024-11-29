/* eslint-disable no-unused-vars */

import "../style/LoginAdmin.css";
import { Link } from "react-router-dom";

function LoginAdmin() {
    return (

        <>
            
            <div className="container1-loginadmin">

                
                <div className="header-loginadmin">
                </div>

                <div className="content-loginadmin">
                    <form action="">

                        <h1 className="text-white keterangan-loginadmin">LOGIN ADMIN</h1>

                        <div className="field-loginadmin">
                            
                            <label htmlFor="email" className="label-loginadmin">Email</label>
                            <div className="control-loginadmin">
                                <input type="text" className="input-loginadmin" placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-loginadmin">

                            <label htmlFor="password" className="label-loginadmin">Password</label>
                            <div className="control-loginadmin">
                                <input type="password" className="input-loginadmin" placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-loginadmin">
                            <button className="btn-submit-loginadmin">Login</button>
                        </div>
                        
                    </form>

                    {/* <p className="text-white link1">Belum Punya Akun? <a className="link" href="">DAFTAR</a> </p> */}
                    <p className="text-white link1-loginadmin">Belum Punya Akun? <Link to="/daftar/admin" className="link-loginadmin">DAFTAR</Link> </p>
                    <p className="text-white link2-loginadmin"> <a className="link2-2-loginadmin" href="">lupa password?</a> </p>

                    <div className="loginlain-loginadmin">
                        <p className="text-white link3-loginadmin"> Masuk Sebagai <a className="link2-3-loginadmin" href="">Sales</a> </p>
                        <p className="text-white link3-loginadmin"> Masuk Sebagai <a className="link2-3-loginadmin" href="">User</a> </p>
                    </div>

                </div>
                
                <div className="footer-loginadmin">

                </div>

            </div>

        </> 

    )
}

export default LoginAdmin