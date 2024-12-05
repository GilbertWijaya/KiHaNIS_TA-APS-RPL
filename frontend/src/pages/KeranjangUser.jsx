/* eslint-disable no-unused-vars */

import "../style/KeranjangUser.css";
import TemplateUser from "./TemplateUser";
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice.js";

const KeranjangUser = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const {user} = useSelector((state) => state.auth);
    // console.log(user.adminRes.id);
    
    useEffect(() => {
        dispatch(getMe());
    },[dispatch])

    const [cartItems,setCartItems] = useState([]);
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // fetch cart items from local storage
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(localCart);
    }, []);

    const loadImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    // Fungsi untuk menghitung total harga
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.hargaBarang, 0);
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        // if (cartItems.length === 0) {
        //     alert("Keranjang Anda kosong!");
        //     return;
        // }

        const formData = new FormData();
        formData.append("namaPembeli",user.user.name);
        formData.append("kodeTokoAdm", user.user.kodeTokoAdm);
        formData.append("dataBarang", JSON.stringify(cartItems + " " +  calculateTotal()));
        formData.append("buktiPembayaran", image);
        formData.append("userId", id);
        formData.append("adminId",user.adminRes.id);

        try {
            // Simpan data ke backend jika perlu
            await axios.post("http://localhost:1221/api/nota",formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            
                
                // Bersihkan local storage setelah checkout
                localStorage.removeItem("cart");
                setCartItems([]);
                
                // Redirect ke halaman lain (misal: halaman riwayat pembayaran)
                navigate(`/user/riwayatpembayaranuser/${id}`);
            
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("Terjadi kesalahan saat proses checkout. Silakan coba lagi.");
        }
    };

    return (
        
        <>

            <TemplateUser>

                <div className="keranjanguser-container">

                    <h1>KERANJANG ANDA</h1>

                    <div className="keranjanguser-content">

                        <form action="" onSubmit={handleCheckout}>

                            {
                                
                                cartItems.map((item,index) => (
                                <div className="keranjanguser-item" key={index}>


                                    <div className="field">
                                        
                                        <input type="hidden" name="" />
                                        <h5>{item.namaBarang}</h5>
                                        <h6>Rp {item.hargaBarang}</h6>
                                        {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                        <div className="control">
                                            <input type="number" id="jumlahbarang" className="input-keranjanguser" min={1}  placeholder="1" required/>
                                        </div>

                                    </div>

                                </div>

                                ))

                            }

                            <div className="field">
                                <div className="control">
                                    <h4>Total harga : Rp {calculateTotal()}</h4>
                                </div>
                            </div>

                            <div className="action">
                                <input type="file" name="" id="" onChange={loadImage}/><br />
                                <button className="btn-submit" type="submit">CHECK OUT</button>
                            </div>

                        </form>
                    </div>

                </div>

            </TemplateUser>

        </>

    )
}

export default KeranjangUser