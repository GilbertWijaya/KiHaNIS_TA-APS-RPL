/* eslint-disable no-unused-vars */

import "../style/KeranjangSales.css";
import TemplateSales from "./TemplateSales";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice2";
import axios from "axios";

const KeranjangSales = () => {

    const [namaPembeli,setNamaPembeli] = useState("");
    const [alamatPembeli,setAlamatPembeli] = useState("");
    const [image,setImage] = useState("");
    const [cartItems,setCartItems] = useState([]);

    const {id} = useParams();
    const {user} = useSelector((state) => state.auth_2);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        // fetch cart items from local storage
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];

        const updatedCart = localCart.map((item) => ({...item,jumlahBarang : 1}))

        setCartItems(updatedCart);
    }, []);

    const loadImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    // Fungsi untuk menghitung total harga
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.hargaBarang * item.jumlahBarang, 0);
    };

    const handleJumlahChange = (index,value) =>{
        const updatedCart = [...cartItems];
        updatedCart[index].jumlahBarang = Math.max(1,Number(value));
        setCartItems(updatedCart);
    }

    const handleCheckout = async (e) => {
        e.preventDefault();

        const totalBarang = calculateTotal();

        const updatedCartItems = cartItems.map(({namaBarang,hargaBarang,jumlahBarang}) => ({
            namaBarang,
            hargaBarang,
            jumlahBarang,
        }))

        const dataBarang = {
            namaPembeli,
            alamatPembeli,
            items : updatedCartItems,
            totalBarang,
        }

        const formData = new FormData();
        formData.append("namaPembeli",namaPembeli);
        formData.append("namaSales",user.sales.name);
        formData.append("kodeTokoAdm", user.sales.kodeTokoAdm);
        formData.append("dataBarang", JSON.stringify(dataBarang));
        formData.append("buktiPembayaran", image);
        formData.append("saleId", id);
        formData.append("adminId",user.sales.adminId);

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
                navigate(`/sales/riwayatpembayaransales/${id}`);
            
        } catch (error) {
            console.error("Error during checkout:", error);
            // alert("Terjadi kesalahan saat proses checkout. Silakan coba lagi.");
        }
    };

    return (
        
        <>

            <TemplateSales>

                <div className="keranjangsales-container">

                    <h1>KERANJANG ANDA</h1>

                    <div className="keranjangsales-content">

                        <form action="" onSubmit={handleCheckout}>

                            <div className="keranjangsales-item">
                                <label htmlFor="namapembeli" className="label-nama">NAMA PEMBELI</label>
                                <div className="control">
                                    <input type="text" id="namapembeli" value={namaPembeli} onChange={(e) => {setNamaPembeli(e.target.value)}} className="input-keranjangsales-nama" placeholder="nama pembeli" required/>
                                </div>
                            </div>

                            <div className="keranjangsales-item">
                                <label htmlFor="alamatpembeli" className="label-nama">ALAMAT PEMBELI</label>
                                <div className="control">
                                    <input type="text" id="alamatpembeli" value={alamatPembeli} onChange={(e) => {setAlamatPembeli(e.target.value)}} className="input-keranjangsales-nama" placeholder="alamat pembeli" required/>
                                </div>
                            </div>

                            {
                                
                                cartItems.map((item,index) => (

                                    <div className="keranjangsales-item" key={index}>


                                        <div className="field">
                                            
                                            <h5>{item.namaBarang}</h5>
                                            <h6>Rp {item.hargaBarang}</h6>
                                            {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                            <div className="control">
                                                <input type="number" id="jumlahbarang" value={item.jumlahBarang} onChange={(e) => handleJumlahChange(index,e.target.value)} className="input-keranjangsales" min={1}  placeholder="1" required/>
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

            </TemplateSales>

        </>

    )
}

export default KeranjangSales