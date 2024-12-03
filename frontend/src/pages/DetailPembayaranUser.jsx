/* eslint-disable no-unused-vars */

import "../style/DetailPembayaranUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link } from "react-router-dom";

const DetailPembayaranUser = () => {
    return (
        <>

            <TemplateUser>

                <div className="nav-user">

                    <div className="navcontent-user">
                        <Link to="/user/riwayatpembayaranuser/:id" className="img-logo"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to="/user/keranjanguser/:id" className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to="/user/profileuser" className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displayuser-detailpembayaran-content">

                        <div className="pembayaran-detailcontent-user">

                            <h1 className="detail-keterangan-user">DETAIL PEMBELIAN</h1>

                            <div className="detailpembayaran-img">
                                <img className="imgpembayarandetail" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="detailpembayaran-keterangan">
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


            </TemplateUser>

        </>
    )
}

export default DetailPembayaranUser