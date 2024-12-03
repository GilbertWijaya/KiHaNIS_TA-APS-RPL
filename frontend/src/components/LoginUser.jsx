/* eslint-disable no-unused-vars */

import "../style/LoginUser.css";
import { Link } from "react-router-dom";

const LoginUser = () => {
    return (
        
        <>

            <div className="container-loginuser">
                
                <div className="formcontainer-loginuser">
                    <form action="">

                        <div className="content-loginuser">

                            <h1 className="keterangan-loginuser">LOGIN USER</h1>

                            <div className="field-loginuser">
                                <label htmlFor="email" className="label-loginuser">Email</label>
                                <div className="control-loginuser">
                                        <input type="text" className="input-loginuser" id="email" placeholder="email" required/>
                                </div>
                            </div>

                            <div className="field-loginuser">
                                <label htmlFor="kode-toko" className="label-loginuser">Kode Toko</label>
                                <div className="control-loginuser">
                                        <input type="text" id="kode-toko" className="input-loginuser" placeholder="g2800t" required/>
                                </div>
                            </div>

                            <div className="field-loginuser">
                                <label htmlFor="password" className="label-loginuser">password</label>
                                <div className="control-loginuser">
                                        <input type="password" id="password" className="input-loginuser" placeholder="********" required/>
                                </div>
                            </div>

                            <div className="field">
                                <button type="submit" className="btn-submit-loginuser">Login</button>
                            </div>

                            <p className="link1-loginuser">Belum Punya Akun? <Link className="link" to="/daftar/user">DAFTAR</Link> </p>
                            <p className="link2-loginuser"> <Link className="link2" to="">lupa password?</Link> </p>

                            <div className="loginlain-loginuser">
                                <p className=" link3-loginuser"> Masuk Sebagai <Link className="link" to="/login/admin">Admin</Link> </p>
                                <p className=" link3-loginuser"> Masuk Sebagai <Link className="link" to="/login/sales">Sales</Link> </p>
                            </div>

                        </div>

                    </form>

                </div>

                <div className="uicontainer-loginuser">
                    
                    <h1 className="app-loginuser fw-bold">SELAMAT DATANG</h1>
                    <p className="app-loginuser2">KiHaNIS(Kita Hebat bisNIS)</p>

                </div>

            </div>
           
        </>

    )
}

export default LoginUser