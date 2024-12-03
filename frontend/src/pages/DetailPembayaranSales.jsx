/* eslint-disable no-unused-vars */

import "../style/DetailPembayaranSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link } from "react-router-dom";

const DetailPembayaranSales = () => {
    return (
        <>

            <TemplateSales>

                <div className="nav-sales">

                    <div className="navcontent-sales">
                        <Link to="/sales/riwayatpembayaransales/:id" className="img-logo"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to="/sales/keranjangsales/:id" className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to="/sales/profilesales" className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displaysales-detailpembayaran-content">

                        <div className="pembayaran-detailcontent-sales">

                            <h1 className="detail-keterangan-sales">DETAIL PEMBELIAN</h1>

                            <div className="detailpembayaran-img">
                                <img className="imgpembayarandetail" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="detailpembayaran-keterangan">
                                <p>Nama Sales</p>
                                <p>Nama Pembeli</p>
                                <p>Alamat</p>
                                <p>Status Pembayaran</p>
                                <div className="control">
                                    <textarea name="" id="detail" className="textarea">
                                        Nama Pembeli: Yanto Dadar
                                        Alamat: Jalan Raya No. 123
                                        Status Pembayaran: Acc
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