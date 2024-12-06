/* eslint-disable no-unused-vars */

import "../style/DashboardSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice2.js";
import { useState,useEffect } from "react";
import axios from "axios";

const DashboardSales = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const [products,setProducts] = useState([]);

    const {user} = useSelector((state) => state.auth_2);
    // console.log(user);
    

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

            <TemplateSales>

                <div className="nav-sales">

                    <div className="navcontent-sales">
                        <Link to={`/sales/riwayatpembayaransales/${user.sales.id}`} className="img-logo-uang"> <img src="/logouang.png" alt="logo" /> </Link>
                        <Link to={`/sales/keranjangsales/${user.sales.id}`} className="img-logo"> <img src="/logokeranjang.png" alt="logo" /> </Link>
                        <Link to={`/sales/profilesales/${user.sales.id}`} className="img-logo"> <img src="/logoprofile.png" alt="logo" /> </Link>
                    </div>
                </div>

                    <div className="displaysales-content">

                        {
                            products.map((product,index) => {
                                
                                return(
                                    <div className="product-content-sales" key={product.id}>

                                        <div className="product-img">
                                            <img className="imgproduct" src={product.ProductPicture} alt="gambar" />
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


            </TemplateSales>

        </>
    )
}

export default DashboardSales