/* eslint-disable no-unused-vars */

import "../style/DetailPembayaranUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice.js";

const DetailPembayaranUser = () => {

    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
    },[]);

    const {user} = useSelector((state) => state.auth);

    const [namaPembeli,setNamaPembeli] = useState("");
    const [kodeTokoAdm,setKodeTokoAdm] = useState("");
    const [gambar,setGambar] = useState("");
    const [barang,setBarang] = useState("");
    const [statusPembayaran,setStatusPembayaran] = useState("");

    useEffect(() => {
        getNotaByID();
    },[id]);

    const getNotaByID = async() => {

        const response = await axios.get(`http://localhost:1221/api/nota/user/bynota/${id}`);

        setNamaPembeli(response.data.namaPembeli);
        setKodeTokoAdm(response.data.kodeTokoAdm);
        setGambar(response.data.buktiPembayaran);
        setBarang(response.data.dataBarang);
        setStatusPembayaran(response.data.statusPembayaran);   
    }

    

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

                    <div className="displayuser-detailpembayaran-content">

                        <div className="pembayaran-detailcontent-user">

                            <h1 className="detail-keterangan-user">DETAIL PEMBELIAN</h1>

                            <div className="detailpembayaran-img">
                                <img className="imgpembayarandetail" src={gambar || `/defaultpicture500.jpg`} alt="gambar" />
                            </div>

                            <div className="detailpembayaran-keterangan">
                                <p>Nama Pembeli : {namaPembeli}</p>
                                <p>Kode Toko Admin : {kodeTokoAdm}</p>
                                <p>Status Pembayaran : {statusPembayaran}</p>
                                <div className="control">
                                    <textarea name="" id="detail" value={barang} className="textarea"readOnly>
                                    </textarea>
                                </div>
                            </div>

                            {/* <div className="action-detailpembayaran">
                                <button className="btn-submit" type="submit">DETAIL</button>
                            </div> */}

                        </div>
            
                    </div>


            </TemplateUser>

        </>
    )
}

export default DetailPembayaranUser