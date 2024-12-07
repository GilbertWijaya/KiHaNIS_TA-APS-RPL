/* eslint-disable no-unused-vars */

import "../style/DaftarAdmin.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useState } from "react";

function DaftarAdmin() {

    const [name,setName] = useState("");
    const [nomorHP,setNomorHP] = useState("");
    const [nomorRek,setNomorRek] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const createAdmin = async(e) => {

        e.preventDefault();

        try {
            
            await axios.post(`http://localhost:1221/api/admin`,{
                name,
                nomorHP,
                nomorRek,
                email,
                password
            });

            navigate("/");

        } catch (error) {
            if (error) {
                console.log(error.response);
            }
        }

    }

    return (

        <>
            
            <div className="container1-daftaradmin">

                
                <div className="header-daftaradmin">
                </div>

                <div className="content-daftaradmin">
                    <form action="" onSubmit={createAdmin}>

                        <h1 className="text-white keterangan-daftaradmin">DAFTAR ADMIN</h1>

                        <div className="field-daftaradmin">
                            
                            <label htmlFor="nama" className="label-daftaradmin">Nama</label>
                            <div className="control-daftaradmin">
                                <input type="text" id="nama" value={name} onChange={(e) => setName(e.target.value)} className="input-daftaradmin" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-daftaradmin">
                            
                            <label htmlFor="nomorHP" className="label-daftaradmin">Nomor Handphone</label>
                            <div className="control-daftaradmin">
                                <input type="text" id="nomorHP" className="input-daftaradmin" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} placeholder="081112345678" required/>
                            </div>
                        </div>

                        <div className="field-daftaradmin">
                            
                            <label htmlFor="nomorRek" className="label-daftaradmin">Nomor Rekening</label>
                            <div className="control-daftaradmin">
                                <input type="text" id="nomorRek" className="input-daftaradmin" value={nomorRek} onChange={(e) => setNomorRek(e.target.value)} placeholder="0370123048" required/>
                            </div>
                        </div>

                        <div className="field-daftaradmin">
                            
                            <label htmlFor="email" className="label-daftaradmin">Email</label>
                            <div className="control-daftaradmin">
                                <input type="text" id="email" className="input-daftaradmin" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                            </div>
                        </div>

                        <div className="field-daftaradmin">

                            <label htmlFor="password" className="label-daftaradmin">Password</label>
                            <div className="control-daftaradmin">
                                <input type="password" id="password" className="input-daftaradmin" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required/>
                            </div>
                        </div>

                        <div className="field-daftaradmin">
                            <button className="btn-submit-daftaradmin" type="submit">Register</button>
                        </div>
                        
                    </form>

                    {/* <p className="text-white link1">Sudah Punya Akun? <a className="link" href="">LOGIN</a> </p> */}
                    <p className="text-white link1-daftaradmin">Sudah Punya Akun? <Link className="link-daftaradmin" to="/login/admin">LOGIN</Link> </p>
                    <p className="text-white link2-daftaradmin"> <Link className="link2-2-daftaradmin" to="">lupa password?</Link> </p>

                    <div className="loginlain">
                        <p className="text-white link3-daftaradmin"> Masuk Sebagai <Link className="link2-3-daftaradmin" to="/login/sales">Sales</Link> </p>
                        <p className="text-white link3-daftaradmin"> Masuk Sebagai <Link className="link2-3-daftaradmin" to="/login/user">User</Link> </p>
                    </div>

                </div>
                
                <div className="footer-daftaradmin">

                </div>

            </div>

        </> 

    )
}

export default DaftarAdmin