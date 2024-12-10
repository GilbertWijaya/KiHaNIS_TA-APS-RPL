/* eslint-disable no-unused-vars */

import "../style/DetailPembayaranSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice2.js";

const DetailPembayaranSales = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMe());
    },[dispatch])

    const {user} = useSelector((state) => state.auth_2);
    // console.log(user);
    

    const [namaSales,setNamaSales] = useState("");
    const [namaPembeli,setNamaPembeli] = useState("");
    const [kodeTokoAdm,setKodeTokoAdm] = useState("");
    const [statusPembayaran,setStatusPembayaran] = useState("");
    const [dataBarang,setDataBarang] = useState([]);
    const [gambar,setGambar] = useState("");

    const getNotaByID = async() => {

        const response = await axios.get(`http://localhost:1221/api/nota/sales/bynota/${id}`);

        setNamaSales(response.data.namaSales);
        setNamaPembeli(response.data.namaPembeli);
        setKodeTokoAdm(response.data.kodeTokoAdm);
        setGambar(response.data.buktiPembayaran);
        setDataBarang(response.data.dataBarang);
        setStatusPembayaran(response.data.statusPembayaran);

    }

    useEffect(() => {
        getNotaByID();
    },[id]);

    return (
        <>

            <TemplateSales>

                <div className="nav-sales">

                    <div className="navcontent-sales">
                        <Link to={`/sales/riwayatpembayaransales/${user.sales.id}`} className="img-logo"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to={`/sales/keranjangsales/${user.sales.id}`} className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to={`/sales/profilesales/${user.sales.id}`} className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displaysales-detailpembayaran-content">

                        <div className="pembayaran-detailcontent-sales">

                            <h1 className="detail-keterangan-sales">DETAIL PEMBELIAN</h1>

                            <div className="detailpembayaran-img">
                                <img className="imgpembayarandetail" src={gambar} alt="gambar" />
                            </div>

                            <div className="detailpembayaran-keterangan">
                                <p>Nama Sales : {namaSales}</p>
                                <p>Nama Pembeli : {namaPembeli}</p>
                                {/* <p>Alamat</p> */}
                                <p>Status Pembayaran : {statusPembayaran}</p>
                                <div className="control">
                                    <textarea name="" id="detail" value={dataBarang} className="textarea">
                                        
                                    </textarea>
                                </div>
                            </div>

                            {/* <div className="action-detailpembayaran">
                                <button className="btn-submit" type="submit">DETAIL</button>
                            </div> */}

                        </div>
            
                    </div>


            </TemplateSales>

        </>
    )
}

export default DetailPembayaranSales