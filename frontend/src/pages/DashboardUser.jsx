/* eslint-disable no-unused-vars */

import "../style/DashboardUser.css";
import TemplateUser from "./TemplateUser.jsx";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { getMe } from "../features/authSlice.js";
import { useSelector } from "react-redux";

const DashboardUser = () => {

    const [products,setProducts] = useState([]);

    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        getProduct();
    },[]);

    const { id } = useParams();

    const getProduct = async() => {
        const response = await axios.get(`http://localhost:1221/api/products/${id}`);
        setProducts(response.data);
    }

    const handleLocalStorage = (product) => {

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const updateCart = [...existingCart,product];

        localStorage.setItem("cart", JSON.stringify(updateCart));

    }

    return (
        <>

            <TemplateUser>

                <div className="nav-user">

                    <div className="navcontent-user">
                        <Link to= {`/user/riwayatpembayaranuser/${user.user.id}`} className="img-logo-uang"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to={`/user/keranjanguser/${user.user.id}`} className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to={`/user/profileuser/${user.user.id}`} className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displayuser-content">

                        {   
                            products.map((product,index) => {
                                
                                // console.log(product.ProductPicture);
                                
                                                            
                                return (
                                    <div className="product-content-user" key={product.id}>
                                        

                                        <div className="product-img">
                                            <img className="imgproduct" src={ product.ProductPicture} alt="gambar" />
                                        </div>

                                        <div className="product-keterangan">
                                            <p>{product.namaBarang}</p>
                                        </div>

                                        <div className="action-product">
                                            <button className="btn-submit" onClick={() => handleLocalStorage(product)} type="submit">Rp {product.hargaBarang}</button>
                                        </div>

                                        
                                    </div>
                                )
                            })
                            
                        }

                    </div>


            </TemplateUser>

        </>
    )
}

export default DashboardUser