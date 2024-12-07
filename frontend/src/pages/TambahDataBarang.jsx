/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/TambahDataBarang.css"
import { useState,useEffect } from "react";
import { getMe } from "../features/authSlice2.js";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahDataBarang = () => {

    const [namaBarang,setNamaBarang] = useState("");
    const [hargaBarang,setHargaBarang] = useState("");
    const [kodeBarang,setKodeBarang] = useState("");
    const [keteranganBarang,setKeteranganBarang] = useState("");
    const [gambar,setGambar] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const {user} = useSelector((state) => state.auth_2);

    const uploadImage = (e) => {
        const file = e.target.files[0];
        setGambar(file);
    }

    const createBarang = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('namaBarang', namaBarang);
        formData.append('hargaBarang', hargaBarang);
        formData.append('kodeBarang', kodeBarang);
        formData.append('keterangan', keteranganBarang);
        formData.append('ProductPicture', gambar);

        try {
            
            await axios.post(`http://localhost:1221/api/products/${user.admin.kodeTokoAdm}`,formData,{
                headers : {
                    'Content-Type' :'multipart/form-data'
                }
            })

            navigate(`/admin/databarangadmin/${user.admin.id}`);

        } catch (error) {
            if (error.response) {
                console.log(error.response);
            }
        }

    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-tambahdatabarang">TAMBAH DATA BARANG</h1>

                <div className="data-tambahdatabarang">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <form action="" onSubmit={createBarang}>


                        <div className="keterangan-tambahdatabarang-content">

                            <div className="field-tambahdatabarang">
                                <label htmlFor="nama" className="label">Nama</label>
                                <div className="control">
                                    <input type="text" value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} className="input-tambahdatabarang" id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-tambahdatabarang">
                                <label htmlFor="harga" className="label">harga</label>
                                <div className="control">
                                    <input type="text" value={hargaBarang} onChange={(e) => setHargaBarang(e.target.value)} className="input-tambahdatabarang" id="harga" placeholder="28000" required/>
                                </div>
                            </div>

                            <div className="field-tambahdatabarang">
                                <label htmlFor="kodeBarang" className="label">Kode Barang</label>
                                <div className="control">
                                    <input type="text" value={kodeBarang} onChange={(e) => setKodeBarang(e.target.value)} className="input-tambahdatabarang" id="KodeBarang" placeholder="11112222" required/>
                                </div>
                            </div>

                            <div className="field-tambahdatabarang">
                                <label htmlFor="Keterangan" className="label">Keterangan</label>
                                <div className="control">
                                    {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                    <textarea name="" id="Keterangan" value={keteranganBarang} onChange={(e) => setKeteranganBarang(e.target.value)} className="input-tambahdatabarang-textarea"></textarea>
                                </div>
                            </div>

                            <div className="field-tambahdatabarang">
                                <label htmlFor="productpic" className="label">Product Picture</label>
                                <div className="control">
                                    <input type="file" className="input-tambahdatabarang" onChange={uploadImage} id="productpic" />
                                </div>
                            </div>

                            <div className="field-tambahdatabarang">
                                <button className="button-tambahdatabarang mt-5" type="submit">Simpan</button>
                            </div>

                        </div>

                    </form>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default TambahDataBarang