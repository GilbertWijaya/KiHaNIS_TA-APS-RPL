/* eslint-disable no-unused-vars */

import "../style/RiwayatPembayaranSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link } from "react-router-dom";

const RiwayatPembayaranSales = () => {
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

                    <div className="displaysales-pembayaran-content">

                        <div className="pembayaran-content-sales">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Sales</p>
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>
                        
                        <div className="pembayaran-content-sales">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Sales</p>
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>

                        <div className="pembayaran-content-sales">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Sales</p>
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>

                    </div>


            </TemplateSales>

        </>
    )
}

export default RiwayatPembayaranSales