/* eslint-disable no-unused-vars */

import "../style/DashboardUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link } from "react-router-dom";

const DashboardUser = () => {
    return (
        <>

            <TemplateUser>

                <div className="nav-user">

                    <div className="navcontent-user">
                        <Link to="/user/riwayatpembayaranuser/:id" className="img-logo-uang"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to="/user/keranjanguser/:id" className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to="/user/profileuser" className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displayuser-content">

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>
                        
                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-user">

                            <div className="product-img">
                                <img className="imgproduct" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                    </div>


            </TemplateUser>

        </>
    )
}

export default DashboardUser