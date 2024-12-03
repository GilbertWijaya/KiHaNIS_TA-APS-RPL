/* eslint-disable no-unused-vars */

import "../style/ProfileSales.css";
import TemplateSales from "./TemplateSales.jsx";

const ProfileSales = () => {
    return (
        
        <>

            <TemplateSales>
                
                <div className="profilesales-container">

                    <h1>PROFILE SALES</h1>

                    <div className="profilsales-content">

                        <form action="">

                            <div className="img-profilesales-container">
                                <img className="img-profilesales" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nama" className="label-profilesales">NAMA</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="kodetokoadmin" className="label-profilesales">KODE TOKO ADMIN</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" id="kodetokoadmin" placeholder="kode toko" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nomorHP" className="label-profilesales">NOMOR HP</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" id="nomorHP" placeholder="0822----1234" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="nomorRek" className="label-profilesales">NOMOR REKENING</label>
                                <div className="control">
                                    <input type="text" className="input-profilesales-profile" id="nomorRek" placeholder="03341234" required/>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="jeniskelamin" className="label-profilesales">JENIS KELAMIN</label>
                                <div className="control">
                                    {/* <input type="text" className="input-profilesales-profile" id="jeniskelamin" placeholder="laki-laki" required/> */}
                                    
                                    <select id="jeniskelamin" className="input-profilesales-profile">
                                        <option value="laki-laki">Laki-laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="alamat" className="label-profileuser-sales">ALAMAT</label>
                                <div className="control">
                                    <textarea name="" id="alamat" className="input-textarea-profilesales-profile">
                                        ada apa
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="keterangan" className="label-profilesales">KETERANGAN</label>
                                <div className="control">
                                    <textarea name="" id="keterangan" className="input-textarea-profilesales-profile">
                                        ada apa
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile-sales">
                                <label htmlFor="profilepic" className="label-profilesales">PROFILE PICTURE</label>
                                <div className="control">
                                    <input type="file" name="" id="profilepic" className="input-profilesales-profile"/>
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