/* eslint-disable no-unused-vars */

import "../style/ProfileUser.css";
import TemplateUser from "./TemplateUser.jsx";

const ProfileUser = () => {
    return (
        
        <>

            <TemplateUser>
                
                <div className="profileuser-container">

                    <h1>PROFILE USER</h1>

                    <div className="profiluser-content">

                        <form action="">

                            <div className="img-profileuser-container">
                                <img className="img-profileuser" src="/defaultpicture500.jpg" alt="gambar" />
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nama" className="label-profileuser">NAMA</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nama" placeholder="nama" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nomorHP" className="label-profileuser">NOMOR HP</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nomorHP" placeholder="0822----1234" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="nomorRek" className="label-profileuser">NOMOR REKENING</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="nomorRek" placeholder="03341234" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="jeniskelamin" className="label-profileuser">JENIS KELAMIN</label>
                                <div className="control">
                                    <input type="text" className="input-profileuser-profile" id="jeniskelamin" placeholder="laki-laki" required/>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="alamat" className="label-profileuser">ALAMAT</label>
                                <div className="control">
                                    <textarea name="" id="alamat" className="input-textarea-profileuser-profile">
                                        ada apa
                                    </textarea>
                                </div>
                            </div>

                            <div className="field-profile">
                                <label htmlFor="keterangan" className="label-profileuser">KETERANGAN</label>
                                <div className="control">
                                    <textarea name="" id="keterangan" className="input-textarea-profileuser-profile">
                                        ada apa
                                    </textarea>
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