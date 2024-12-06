/* eslint-disable no-unused-vars */

import "../style/RiwayatPembayaranSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice2.js";

const RiwayatPembayaranSales = () => {

    const [Nota,setNota] = useState([]);
    const {id} = useParams();
    const dispatch = useDispatch();

    const getNota = async() => {
        const response = await axios.get(`http://localhost:1221/api/nota/sales/${id}`);
        setNota(response.data);
        // console.log(response);
    }

    useEffect(() => {
        getNota();
    },[id]);

    useEffect(() => {
        dispatch(getMe());
    },[dispatch])

    
    const {user} = useSelector((state) => state.auth_2);    
    

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

                    <div className="displaysales-pembayaran-content">

                        {
                            Nota.map((nota,_) => {

                                return(
                                    <div className="pembayaran-content-sales" key={nota.id}>

                                        <div className="pembayaran-img">
                                            <img className="imgpembayaran" src={nota.buktiPembayaran} alt="gambar" />
                                        </div>

                                        <div className="pembayaran-keterangan">
                                            <p>{nota.namaSales}</p>
                                        </div>

                                        <div className="pembayaran-keterangan">
                                            <p>{nota.namaPembeli}</p>
                                        </div>

                                        <div className="action-pembayaran">
                                            <Link to={`/sales/detailpembayaransales/${nota.id}`} className="btn-submit" type="submit">DETAIL</Link>
                                        </div>

                                    </div>
                                )

                            })

                        }

                    </div>


            </TemplateSales>

        </>
    )
}

export default RiwayatPembayaranSales