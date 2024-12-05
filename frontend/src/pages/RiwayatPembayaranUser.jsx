/* eslint-disable no-unused-vars */

import "../style/RiwayatPembayaranUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

const RiwayatPembayaranUser = () => {

    const [Nota,setNota] = useState([]);
    const {id} = useParams();

    const getNota = async() => {
        const response = await axios.get(`http://localhost:1221/api/nota/user/${id}`);
        setNota(response.data);
    }

    useEffect(() => {
        getNota();
    },[id]);

    // console.log(Nota);
    const {user} = useSelector((state) => state.auth);
    

    return (
        <>

            <TemplateUser>

                <div className="nav-user">

                    <div className="navcontent-user">
                        <Link to={`/user/riwayatpembayaranuser/${user.user.id}`} className="img-logo"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to={`/user/keranjanguser/${user.user.id}`} className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to={`/user/profileuser/${user.user.id}`} className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displayuser-pembayaran-content">

                        {

                            Nota.map((nota,_) => {

                                return (
                                <div className="pembayaran-content-user" key={nota.id}>

                                    <div className="pembayaran-img">
                                        <img className="imgpembayaran" src={nota.buktiPembayaran} alt="gambar" />
                                    </div>

                                    <div className="pembayaran-keterangan">
                                        <p>{nota.namaPembeli}</p>
                                    </div>

                                    <div className="action-pembayaran">
                                        <Link to={`/user/detailpembayaranuser/${nota.id}`} className="btn-submit" type="submit">DETAIL</Link>
                                    </div>

                                </div>

                            )})


                        }


                    </div>


            </TemplateUser>

        </>
    )
}

export default RiwayatPembayaranUser