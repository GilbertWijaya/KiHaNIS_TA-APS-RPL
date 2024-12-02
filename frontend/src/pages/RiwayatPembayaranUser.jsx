/* eslint-disable no-unused-vars */

import "../style/RiwayatPembayaranUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link } from "react-router-dom";

const RiwayatPembayaranUser = () => {
    return (
        <>

            <TemplateUser>

                <div className="nav-user">

                    <div className="navcontent-user">
                        <Link to="" className="img-logo"> <img src="./public/logouang.png" alt="logo" /> </Link>
                        <Link to="" className="img-logo"> <img src="./public/logokeranjang.png" alt="logo" /> </Link>
                        <Link to="" className="img-logo"> <img src="./public/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displayuser-pembayaran-content">

                        <div className="pembayaran-content-user">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>
                        
                        <div className="pembayaran-content-user">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>

                        <div className="pembayaran-content-user">

                            <div className="pembayaran-img">
                                <img className="imgpembayaran" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="pembayaran-keterangan">
                                <p>Nama Pembeli</p>
                            </div>

                            <div className="action-pembayaran">
                                <Link className="btn-submit" type="submit">DETAIL</Link>
                            </div>

                        </div>

                    </div>


            </TemplateUser>

        </>
    )
}

export default RiwayatPembayaranUser