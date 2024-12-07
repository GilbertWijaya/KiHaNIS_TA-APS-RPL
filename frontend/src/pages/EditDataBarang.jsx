/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/EditDataBarang.css"
import { Link,useParams,useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice2.js";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react"; 
import axios from "axios";

const EditDataBarang = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const {user} = useSelector((state) => state.auth_2);

    const [namaBarang,setNamaBarang] = useState("");
    const [hargaBarang,setHargaBarang] = useState("");
    const [kodeBarang,setKodeBarang] = useState("");
    const [keteranganBarang,setKeteranganBarang] = useState("");
    const [gambar,setGambar] = useState("");

    const uploadImage = async(e) => {
        const file = e.target.files[0];
        setGambar(file)
    }

    const {id} = useParams();

    const getProducts = async() => {
        const response = await axios.get(`http://localhost:1221/api/products/detail/${id}`);
        setNamaBarang(response.data.namaBarang);
        setHargaBarang(response.data.hargaBarang);
        setKodeBarang(response.data.kodeBarang);
        setKeteranganBarang(response.data.keterangan);
        setGambar(response.data.ProductPicture);
    }

    useEffect(() => {
        getProducts();
    },[]);

    const navigate = useNavigate();

    const updateBarang = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('namaBarang', namaBarang);
        formData.append('hargaBarang', hargaBarang);
        formData.append('kodeBarang', kodeBarang);
        formData.append('keterangan', keteranganBarang);
        formData.append('ProductPicture', gambar);

        try {
            
            await axios.patch(`http://localhost:1221/api/products/${id}`,formData,{
                headers : {
                    'Content-Type' :'multipart/form-data'
                }
            })

            navigate(`/admin/databarangadmin/${user.admin.id}`)

        } catch (error) {
            if (error.response) {
                console.log(error.response);
            }
        }

    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-editdatabarang">EDIT DATA BARANG</h1>

                <div className="data-editdatabarang">

                    <div className="img-dataadmin">
                        <img className="dataimg" src={ gambar || `/defaultpicture500.jpg`} alt="gambar" />
                    </div>

                    <form action="" onSubmit={updateBarang}>


                        <div className="keterangan-editdatabarang-content">

                            <div className="field-editdatabarang">
                                <label htmlFor="nama" className="label">Nama</label>
                                <div className="control">
                                    <input type="text" value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} className="input-editdatabarang" id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-editdatabarang">
                                <label htmlFor="harga" className="label">harga</label>
                                <div className="control">
                                    <input type="text" value={hargaBarang} onChange={(e) => setHargaBarang(e.target.value)} className="input-editdatabarang" id="harga" placeholder="28000" required/>
                                </div>
                            </div>

                            <div className="field-editdatabarang">
                                <label htmlFor="kodeBarang" className="label">Kode Barang</label>
                                <div className="control">
                                    <input type="text" value={kodeBarang} onChange={(e) => setKodeBarang(e.target.value)} className="input-editdatabarang" id="KodeBarang" placeholder="11112222" required/>
                                </div>
                            </div>

                            <div className="field-editdatabarang">
                                <label htmlFor="Keterangan" className="label">Keterangan</label>
                                <div className="control">
                                    {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                    <textarea name="" id="Keterangan" value={keteranganBarang} onChange={(e) => setKeteranganBarang(e.target.value)} className="input-editdatabarang-textarea"></textarea>
                                </div>
                            </div>

                            <div className="field-editdatabarang">
                                <label htmlFor="productpic" className="label">Product Picture</label>
                                <div className="control">
                                    <input type="file" name="" id="productpic" onChange={uploadImage} className="input-editdatabarang"/>
                                </div>
                            </div>

                            <div className="field-editdatabarang">
                                <button className="button-editdatabarang mt-5" type="submit">Simpan</button>
                            </div>

                        </div>
                    </form>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default EditDataBarang