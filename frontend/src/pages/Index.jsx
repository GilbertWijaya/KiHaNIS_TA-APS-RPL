/* eslint-disable no-unused-vars */

import "../style/Index.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        
        <>

            <div className="index-container">
                
                <div className="index-header">
                    
                    <div className="index-name">
                        <img className="index-logo" src="/logoapp.png" alt="logo" />
                        <h1>KiHaNIS</h1>
                    </div>

                    <div className="index-keterangan">
                        <h3>#Kami_Solusi_Anda</h3>
                    </div>

                    <div className="header-btn">
                        {/* <Link to="#pendaftaran" className="btn-register">DAFTAR</Link> */}
                        <a href="#pendaftaran" className="btn-register">DAFTAR</a>
                    </div>

                </div>

                <div className="index-jumbotron">

                    <div className="img-jumbotron">
                        <img src="/logoapp.png" alt="logo" className="jumbotron-img" />
                    </div>

                    <div className="jumbotron-keterangan">
                        <h2>Solusi yang Anda Butuhkan</h2>
                        <p>
                            <b>KiHaNIS</b> adalah solusi yang tepat guna, berkualitas, dan terpercaya bagi perusahaan-perusahaan yang ingin mencapai tujuan mereka.
                            Kami Menjadi #No.1 dalam menyelesaikan permasalahan bisnis anda
                        </p>
                    </div>

                </div>

                <div className="index-tentang-kami">

                    <div className="tf-keterangan">
                        <h2 className="fw-bold mt-5">TENTANG KAMI</h2>
                        <div className="tf-keterangan-content">

                            <p className="p1">
                                <b>KiHaNIS</b> adalah solusi yang tepat guna, berkualitas, dan terpercaya bagi perusahaan-perusahaan yang ingin mencapai tujuan mereka.
                                Kami Menjadi #No.1 dalam menyelesaikan permasalahan bisnis anda
                            </p>

                            <p className="p2">
                                <b>KiHaNIS</b> adalah solusi yang tepat guna, berkualitas, dan terpercaya bagi perusahaan-perusahaan yang ingin mencapai tujuan mereka.
                                Kami Menjadi #No.1 dalam menyelesaikan permasalahan bisnis anda
                            </p>

                        </div>
                        <p className="fw-bold keterangan-tanya">Apakah Masih Ragu?</p>
                    </div>

                </div>

                <div className="index-tentang-founder">

                    <div className="tf-founder">

                        <h2 className="fw-bold mt-5">TENTANG FOUNDER</h2>

                        <div className="tf-founder-content">

                            <div className="founder-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">SANDI WIDYA P</h3>
                                <p>Berpengalaman Dalam Dunia Desain dan Berbisnis</p>
                            </div>
                            <div className="founder-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">GILBERT WIJAYA</h3>
                                <p>Berpengalaman Dalam Dunia Komputer dan Berbisnis</p>
                            </div>
                            <div className="founder-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">NANDA NALENDRA B</h3>
                                <p>Berpengalaman Dalam Dunia Bisnis Dalam Berbagai Lingkup</p>
                            </div>

                        </div>
                        <p className="founder-tanya">Tunggu Apa Lagi ? <b>Join</b> Sekarang </p>
                    </div>

                </div>

                <div className="index-daftar" id="pendaftaran">

                    <div className="tf-daftar">

                        <h2 className="fw-bold mt-5">DAFTARKAN DIRI ANDA</h2>

                        <div className="tf-daftar-content">

                            <div className="daftar-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">PEMBELI</h3>
                                <p>Bantu Setiap Orang Menggerakan Roda Perekonomian Mereka</p>
                                <p><Link to="/daftar/user">Daftar</Link></p>
                            </div>
                            <div className="daftar-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">SALES</h3>
                                <p>Bantu Penjual Dan Pembeli Saling Terbantu Termasuk Anda</p>
                                <p><Link to="/daftar/sales">Daftar</Link></p>
                            </div>
                            <div className="daftar-keterangan">
                                <img className="picture" src="/defaultpicture500.jpg" alt="img" />
                                <h3 className="fw-bold">PENJUAL</h3>
                                <p>Jual Manfaat Anda Kepada Mereka Yang Membutuhkan</p>
                                <p><Link to="/daftar/admin">Daftar</Link></p>
                            </div>

                        </div>
                        {/* <p className="founder-tanya">Tunggu Apa Lagi ? <b>Join</b> Sekarang </p> */}
                    </div>

                </div>

                <div className="footer">
                    <div className="footer-content">

                        <div className="img-keterangan">
                            <img src="/logoapp.png" alt="logo" />
                            <h3>KiHaNIS(Kita Hebat bisNIS)</h3>
                        </div>

                        <div className="keterangan-alamat">
                            <p>Jalan Imam Bonjol</p>
                            <p>Kota Blitar, PT Satu Bisnis Meroket</p>
                            <p>ptsbmbusiness@gmail.com</p>
                        </div>

                    </div>
                </div>

            </div>
            
        
        </>

    )
}

export default Index