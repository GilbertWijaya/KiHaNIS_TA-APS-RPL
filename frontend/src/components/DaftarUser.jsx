/* eslint-disable no-unused-vars */

import "../style/DaftarUser.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

const DaftarUser = () => {

    const [name,setName] = useState("");
    const [nomorHP,setNomorHP] = useState("");
    const [nomorRek,setNomorRek] = useState("");
    const [email,setEmail] = useState("");
    const [kodeTokoAdm,setKodeTokoAdm] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const register = async(e) => {

        e.preventDefault();

        try {
            
            await axios.post("http://localhost:1221/api/users",{
                name,
                nomorHP,
                nomorRek,
                email,
                password
            });
    
            navigate("/login/user");

        } catch (error) {
            if (error) {
                console.log(error);
            }
        }

    }

    return (
        
        <>

            <div className="container-daftaruser">
                
                <div className="formcontainer-daftaruser">
                    <form action="" onSubmit={register}>

                        <div className="content-daftaruser">

                            <h1 className="keterangan-daftaruser">DAFTAR USER</h1>

                            <div className="field-daftaruser">
                                <label htmlFor="nama" className="label-daftaruser">Nama</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" value={name} onChange={(e) => setName(e.target.value)} id="nama" placeholder="Nama" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="nomorHP" className="label-daftaruser">Nomor HP</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} id="nomorHP" placeholder="081234567890" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="nomorRek" className="label-daftaruser">Nomor Rekening</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" value={nomorRek} onChange={(e) => setNomorRek(e.target.value)} id="nomorRek" placeholder="03471234" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="email" className="label-daftaruser">Email</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="email" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="kode-toko" className="label-daftaruser">Kode Toko</label>
                                <div className="control-daftaruser">
                                        <input type="text" id="kode-toko" className="input-daftaruser" value={kodeTokoAdm} onChange={(e) => setKodeTokoAdm(e.target.value)} placeholder="g2800t" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="password" className="label-daftaruser">password</label>
                                <div className="control-daftaruser">
                                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-daftaruser" placeholder="********" required/>
                                </div>
                            </div>

                            <div className="field">
                                <button type="submit" className="btn-submit-daftaruser">Login</button>
                            </div>

                            <p className="link1-daftaruser">Sudah Punya Akun? <Link className="link" to="/login/user">LOGIN</Link> </p>
                            <p className="link2-daftaruser"> <Link className="link2" to="">lupa password?</Link> </p>

                            <div className="loginlain-daftaruser">
                                <p className=" link3-daftaruser"> Masuk Sebagai <Link className="link" to="/login/admin">Admin</Link> </p>
                                <p className=" link3-daftaruser"> Masuk Sebagai <Link className="link" to="/login/sales">Sales</Link> </p>
                            </div>

                        </div>

                    </form>

                </div>

                <div className="uicontainer-daftaruser">
                    
                    <h1 className="fw-bold app-daftaruser">SELAMAT DATANG</h1>
                    <p className="app-daftaruser2">KiHaNIS(Kita Hebat bisNIS)</p>

                </div>

            </div>
           
        </>

    )
}

export default DaftarUser