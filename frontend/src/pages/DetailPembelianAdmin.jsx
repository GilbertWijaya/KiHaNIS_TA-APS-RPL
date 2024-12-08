/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DetailPembelianAdmin.css"
import { getMe } from "../features/authSlice2.js";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPembelianAdmin = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const {user} = useSelector((state) => state.auth_2);
    const {id} = useParams();

    const [namaPembeli,setNamaPembeli] = useState("");
    const [namaSales,setNamaSales] = useState("");
    const [statusPembayaran,setStatusPembayaran] = useState("");
    const [dataBarang,setDataBarang] = useState("");
    const [gambar,setGambar] = useState("");

    

    const getNotaById = async() => {
        const response = await axios.get(`http://localhost:1221/api/nota/sales/bynota/${id}`);
        
        setNamaPembeli(response.data.namaPembeli);
        setNamaSales(response.data.namaSales);
        setStatusPembayaran(response.data.statusPembayaran);
        setDataBarang(response.data.dataBarang);
        setGambar(response.data.buktiPembayaran);

        console.log(response.data);
        
    }

    useEffect(() => {
        getNotaById();
    },[id]);

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-detailpembelian">DETAIL PEMBELIAN</h1>

                <div className="data-detailpembelian">

                    <div className="img-detailpembelian">
                        <img className="dataimg-detailpembelian" src={ gambar ||`/defaultpicture500.jpg`} alt="gambar" />
                    </div>

                    <div className="keterangan-detailpembelian-content">

                        <div className="field-detailpembelianadmin">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" value={namaPembeli} id="nama" placeholder="nama" readOnly required/>
                            </div>
                        </div>

                        <div className="field-detailpembelianadmin">
                            <label htmlFor="namaSales" className="label">Nama Sales</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" id="harga" value={namaSales} placeholder="yanto dadar" readOnly required/>
                            </div>
                        </div>

                        <div className="field-detailpembelianadmin">
                            <label htmlFor="status" className="label">Status Pembayaran</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" id="status" value={statusPembayaran} placeholder="acc" readOnly required/>
                            </div>
                        </div>

                        <div className="field-detailpembelianadmin">
                            <label htmlFor="dataBarang" className="label">Data Barang</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="dataBarang" className="input-detailpembelian-textarea" value={dataBarang} readOnly></textarea>
                            </div>
                        </div>

                        <div className="field-detailpembelianadmin">
                            {/* <button className="button-detailpembelian mt-5" type="submit">Simpan</button> */}
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DetailPembelianAdmin