/* eslint-disable no-unused-vars */

import "../style/ProfileSales.css";
import TemplateSales from "./TemplateSales.jsx";
import { getMe } from "../features/authSlice2.js";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileSales = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const {user} = useSelector((state) => state.auth);
    console.log(user);
    

    const [name,setName] = useState(user.sales?.name);
    const [kodeTokoAdm,setKodeTokoAdm] = useState(user.sales?.kodeTokoAdm)
    const [nomorHP,setNomorHP] = useState(user.sales?.nomorHP);
    const [nomorRek,setNomorRek] = useState(user.sales?.nomorRek);
    const [jenisKelamin,setJenisKelamin] = useState(user.sales?.jenisKelamin);
    const [alamat,setAlamat] = useState(user.sales?.alamat);
    const [keterangan,setKeterangan] = useState(user.sales?.keterangan);
    const [gambar,setGambar] = useState(user?.img);

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
        formData.append('jenisKelamin', jenisKelamin);
        formData.append('alamat', alamat);
        formData.append('keterangan', keterangan);
        formData.append('ProfilePicture', gambar);

        try {
           
            await axios.patch(`http://localhost:1221/api/sales/${id}`,formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            });

            navigate(`/sales/profilesales/${id}`);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }

    }

    return (
        
        <>

            <TemplateSales>
                
                <div className="profilesales-container">

                    <h1>PROFILE SALES</h1>

                    <div className="profilsales-content">

                        <form action="" onSubmit={updateUser}>

                            <div className="img-profilesales-container">
                                <img className="img-profilesales" src={ gambar || `/defaultpicture500.jpg`} alt="gambar" />
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nama" className="label-profilesales">NAMA</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" value={name} onChange={(e) => setName(e.target.value)} id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="kodetokoadmin" className="label-profilesales">KODE TOKO ADMIN</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" value={kodeTokoAdm} onChange={(e) => setKodeTokoAdm(e.target.value)} id="kodetokoadmin" placeholder="kode toko" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nomorHP" className="label-profilesales">NOMOR HP</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} id="nomorHP" placeholder="0822----1234" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nomorRek" className="label-profilesales">NOMOR REKENING</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" value={nomorRek} onChange={(e) => setNomorRek(e.target.value)} id="nomorRek" placeholder="03341234" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="jeniskelamin" className="label-profilesales">JENIS KELAMIN</label>
                                <div className="control">
                                    {/* <input type="text" className="input-profilesales-profile" id="jeniskelamin" placeholder="laki-laki" required/> */}
                                    
                                    <select id="jeniskelamin" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} className="input-profilesales-profile">
                                        <option value="laki-laki">Laki-laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="alamat" className="label-profileuser-sales">ALAMAT</label>
                                <div className="control">
                                    <textarea name="" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="input-textarea-profilesales-profile">    
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="keterangan" className="label-profilesales">KETERANGAN</label>
                                <div className="control">
                                    <textarea name="" id="keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} className="input-textarea-profilesales-profile">
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="profilepic" className="label-profilesales">PROFILE PICTURE</label>
                                <div className="control">
                                    <input type="file" name="" id="profilepic" onChange={uploadImage} className="input-profilesales-profile"/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <button className="btn-submit" type="submit">SIMPAN</button>
                            </div>

                        </form>
                    </div>

                </div>

            </TemplateSales>

        </>

    )
}

export default ProfileSales