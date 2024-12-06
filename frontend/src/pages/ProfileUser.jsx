/* eslint-disable no-unused-vars */

import "../style/ProfileUser.css";
import TemplateUser from "./TemplateUser.jsx";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useParams,useNavigate} from "react-router-dom";
import { getMe } from "../features/authSlice.js";

const ProfileUser = () => {
    
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMe());
    },[dispatch])

    useEffect(() => {
        // getProfile();
    },[id])

    

    // const getProfile = async() => {
    //     const response = await axios.get(`http://localhost:1221/api/users/${id}`);
    //     setName(response.data.name);
    //     setNomorHP(response.data.nomorHP);
    //     setNomorRek(response.data.nomorRek);
    //     setJenisKelamin(response.data.jenisKelamin);
    //     setAlamat(response.data.alamat);
    //     setKeterangan(response.data.keterangan);
    //     setGambar(response.data.ProfilePicture);
    // }
    
    
    // const [name,setName] = useState(""); setName(user.user.name);
    // const [nomorHP,setNomorHP] = useState("");setNomorHP(user.user.nomorHP);
    // const [nomorRek,setNomorRek] = useState("");setNomorRek(user.user.nomorRek);
    // const [jenisKelamin,setJenisKelamin] = useState("");setJenisKelamin(user.user.jenisKelamin);
    // const [alamat,setAlamat] = useState("");setAlamat(user.user.alamat);
    // const [keterangan,setKeterangan] = useState("");setKeterangan(user.user.keterangan);
    // const [gambar,setGambar] = useState("");setGambar(user.user.gambar);
    const [name,setName] = useState(user.user.name);
    const [nomorHP,setNomorHP] = useState(user.user.nomorHP);
    const [nomorRek,setNomorRek] = useState(user.user.nomorRek);
    const [jenisKelamin,setJenisKelamin] = useState(user.user.jenisKelamin);
    const [alamat,setAlamat] = useState(user.user.alamat);
    const [keterangan,setKeterangan] = useState(user.user.keterangan);
    const [gambar,setGambar] = useState(user.img);
    // console.log(user.img);
    
    
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
           
            await axios.patch(`http://localhost:1221/api/users/${id}`,formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            });

            navigate(`/user/profileuser/${id}`);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }

    }

    return (
        
        <>

            <TemplateUser>
                
                <div className="profileuser-container">

                    <h1>PROFILE USER</h1>

                    <div className="profiluser-content">

                        <form action="" onSubmit={updateUser}>

                            <div className="img-profileuser-container">
                                <img className="img-profileuser" src={gambar || `/defaultpicture500.jpg`} alt="gambar" />
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nama" className="label-profileuser">NAMA</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nama" value={name} onChange={(e) => setName(e.target.value)} placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nomorHP" className="label-profileuser">NOMOR HP</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nomorHP" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} placeholder="0822----1234" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nomorRek" className="label-profileuser">NOMOR REKENING</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nomorRek" value={nomorRek} onChange={(e) => setNomorRek(e.target.value)} placeholder="03341234" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="jeniskelamin" className="label-profileuser">JENIS KELAMIN</label>
                                <div className="control">
                                    {/* <input type="text" className="input-profileuser-profile" id="jeniskelamin" placeholder="laki-laki" required/> */}
                                    <select name="" id="" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} className="input-profileuser-profile">
                                        <option value="laki-laki">laki-laki</option>
                                        <option value="perempuan">perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="alamat" className="label-profileuser">ALAMAT</label>
                                <div className="control">
                                    <textarea name="" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="input-textarea-profileuser-profile">
                                        ada apa
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="keterangan" className="label-profileuser">KETERANGAN</label>
                                <div className="control">
                                    <textarea name="" id="keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} className="input-textarea-profileuser-profile">
                                        ada apa
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="profilepic" className="label-profileuser">Profile Picture</label>
                                <div className="control">
                                    <input type="file" name="" id="profilepic"  onChange={uploadImage} className="input-profileuser-profile" />
                                </div>
                            </div>

                            <div className="field-profile">
                                <button className="btn-submit" type="submit">SIMPAN</button>
                            </div>

                        </form>
                    </div>

                </div>

            </TemplateUser>

        </>

    )
}

export default ProfileUser