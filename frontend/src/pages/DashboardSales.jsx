/* eslint-disable no-unused-vars */

import "../style/DashboardSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link } from "react-router-dom";

const DashboardSales = () => {
    return (
        <>

            <TemplateSales>

                <div className="nav-sales">

                    <div className="navcontent-sales">
                        <Link to="/sales/riwayatpembayaransales/:id" className="img-logo-uang"> <img src="./public/logouang.png" alt="logo" /> </Link>
                        <Link to="/sales/keranjangsales/:id" className="img-logo"> <img src="./public/logokeranjang.png" alt="logo" /> </Link>
                        <Link to="/profile/sales" className="img-logo"> <img src="./public/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displaysales-content">

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>
                        
                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                        <div className="product-content-sales">

                            <div className="product-img">
                                <img className="imgproduct" src="./public/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="product-keterangan">
                                <p>Nama Product</p>
                            </div>

                            <div className="action-product">
                                <button className="btn-submit" type="submit">Rp 100000</button>
                            </div>

                        </div>

                    </div>


            </TemplateSales>

        </>
    )
}

export default DashboardSales