/* eslint-disable no-unused-vars */

import "../style/DaftarSales.css";
import { Link } from "react-router-dom";


function DaftarSales() {
    return (

        <>
            
            <div className="container1-daftarsales">

                
                <div className="header-daftarsales">
                </div>

                <div className="content-daftarsales">
                    <form action="">

                        <h1 className="text-white keterangan-daftarsales">DAFTAR SALES</h1>

                        <div className="field-daftarsales">
                            
                            <label htmlFor="nama" className="label-daftarsales">Nama</label>
                            <div className="control-daftarsales">
                                <input type="text" id="nama" className="input-daftarsales" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-daftarsales">
                            
                            <label htmlFor="nomorHP" className="label-daftarsales">Nomor Handphone</label>
                            <div className="control-daftarsales">
                                <input type="text" id="nomorHP" className="input-daftarsales" placeholder="081112345678" required/>
                            </div>
                        </div>

                        <div className="field-daftarsales">
                            
                            <label htmlFor="nomorRek" className="label-daftarsales">Nomor Rekening</label>
                            <div className="control-daftarsales">
                                <input type="text" id="nomorRek" className="input-daftarsales" placeholder="0370123048" required/>
                            </div>
                        </div>

                        <div className="field-daftarsales">
                            
                            <label htmlFor="email" className="label-daftarsales">Email</label>
                            <div className="control-daftarsales">
                                <input type="text" id="email" className="input-daftarsales" placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-daftarsales">

                            <label htmlFor="password" className="label-daftarsales">Password</label>
                            <div className="control-daftarsales">
                                <input type="password" id="password" className="input-daftarsales" placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-daftarsales">
                            <button className="btn-submit-daftarsales">Login</button>
                        </div>
                        
                    </form>

                    {/* <p className="text-white link1">Sudah Punya Akun? <a className="link" href="">LOGIN</a> </p> */}
                    <p className="text-white link1-daftarsales">Sudah Punya Akun? <Link className="link-daftarsales" to="/login/sales">LOGIN</Link> </p>
                    <p className="text-white link2-daftarsales"> <Link className="link2-2-daftarsales" to="">lupa password?</Link> </p>

                    <div className="loginlain">
                        <p className="text-white link3-daftarsales"> Masuk Sebagai <Link className="link2-3-daftarsales" to="/login/admin">Admin</Link> </p>
                        <p className="text-white link3-daftarsales"> Masuk Sebagai <Link className="link2-3-daftarsales" to="/login/user">User</Link> </p>
                    </div>

                </div>
                
                <div className="footer-daftarsales">

                </div>

            </div>

        </> 

    )
}

export default DaftarSales