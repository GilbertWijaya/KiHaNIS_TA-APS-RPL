/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DashboardAdmin.css"
import { getMe } from "../features/authSlice2.js";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardAdmin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    const {user,isSuccess} =  useSelector((state) => state.auth_2);

    useEffect(() => {
        dispatch(getMe());
        // setName(user.admin.name);
    }, [dispatch]);
    
    
    useEffect(() => {

        if(user && isSuccess){

            setName(user.admin.name);
            setNomorHP(user.admin.nomorHP);
            setNomorRek(user.admin.nomorRek);
            setEmail(user.admin.email);
            setKodeTokoAdm(user.admin.kodeTokoAdm);
            setJenisKelamin(user.admin.jenisKelamin);
            setAlamat(user.admin.alamat);
            setKeterangan(user.admin.keterangan);
            setGambar(user.img);

        }
    },[user,isSuccess])
    
    const [name,setName] = useState("");
    const [nomorHP,setNomorHP] = useState("");
    const [nomorRek,setNomorRek] = useState("");
    const [email,setEmail] = useState("");
    const [kodeTokoAdm,setKodeTokoAdm] = useState("");
    const [jenisKelamin,setJenisKelamin] = useState("");
    const [alamat,setAlamat] = useState("");
    const [keterangan,setKeterangan] = useState("");
    const [gambar,setGambar] = useState("");

    const uploadImage = async(e) => {
        const file = e.target.files[0];
        setGambar(file)
    }

    const updateUser = async(e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('nomorHP', nomorHP);
        formData.append('nomorRek', nomorRek);
        formData.append('email', email);
        formData.append('kodeTokoAdm', kodeTokoAdm);
        formData.append('jenisKelamin', jenisKelamin);
        formData.append('alamat', alamat);
        formData.append('keterangan', keterangan);
        formData.append('ProfilePicture', gambar);

        try {
            
            await axios.patch(`http://localhost:1221/api/admin/${id}`,formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            });

            navigate(`login/admin`);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                
            }
        }

    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardadmin">PROFIL ANDA</h1>

                <div className="data-dashboardadmin">

                    <form action="" onSubmit={updateUser}>


                        <div className="img-dataadmin">
                            <img className="dataimg" src={ gambar || `defaultpicture500.jpg`} alt="gambar" />
                        </div>

                        <div className="keterangan-dataadmin">

                            <div className="field-admin">
                                <label htmlFor="nama" className="label">Nama</label>
                                <div className="control-admin">
                                    <input type="text" className="input-dashboardadmin" value={name} onChange={(e) => setName(e.target.value)} id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="nomorHP" className="label">Nomor HP</label>
                                <div className="control-admin">
                                    <input type="text" className="input-dashboardadmin" id="nomorHP" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} placeholder="0822....." required/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="nomorRek" className="label">Nomor Rekening</label>
                                <div className="control-admin">
                                    <input type="text" className="input-dashboardadmin" value={nomorRek} onChange={(e) => setNomorRek(e.target.value)} id="nomorRek" placeholder="08222800" required/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="email" className="label">Email</label>
                                <div className="control-admin">
                                    <input type="text" className="input-dashboardadmin" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="namamu@gmail.com" required/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="kodeTokoAdm" className="label">Kode Toko</label>
                                <div className="control-admin">
                                    <input type="text" className="input-dashboardadmin" value={kodeTokoAdm} onChange={(e) => setKodeTokoAdm(e.target.value)} id="kodeTokoAdm" placeholder="g28000t" readOnly required/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="jenis-kelamin" className="label">Jenis Kelamin</label>
                                <div className="control-admin">
                                    {/* <input type="text" className="input-dashboardadmin" id="jenis-kelamin" placeholder="laki-laki" required/> */}
                                    <select name="" id="" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} className="input-dashboardadmin">
                                        <option value="laki-laki">Laki-laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="alamat" className="label">Alamat</label>
                                <div className="control-admin">
                                    <textarea name="" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="input-dashboardadmin-textarea"></textarea>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="Keterangan" className="label">Keterangan</label>
                                <div className="control-admin">
                                    {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                    <textarea name="" id="Keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} className="input-dashboardadmin-textarea"></textarea>
                                </div>
                            </div>

                            <div className="field-admin">
                                <label htmlFor="profilpic" className="label">Profile Picture</label>
                                <div className="control-admin">
                                    <input type="file" onChange={uploadImage} className="input-dashboardadmin" id="profilpic"/>
                                </div>
                            </div>

                            <div className="field-admin">
                                <button className="button-dashboardadmin mt-5" type="submit">Simpan</button>
                            </div>

                        </div>

                    </form>
                </div>

            </TemplateAdmin>

        </>

    )
}

export default DashboardAdmin