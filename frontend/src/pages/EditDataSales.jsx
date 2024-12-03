
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/EditDataSales.css"

const EditDataSales = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-editdatasales">EDIT DATA SALES</h1>

                <div className="data-editdatasales">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-editdatasales-content">

                        <div className="field-editdatasales-admin">
                            <label htmlFor="nama" className="label-editdatasales-admin">Nama</label>
                            <div className="control">
                                <input type="text" className="input-editdatasales-admin" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="nomorHP" className="labeleditdatasales-admin">Nomor HP</label>
                            <div className="control">
                                <input type="text" className="input-editdatasales-admin" id="nomorHP" placeholder="0822....." required/>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="nomorRek" className="labeleditdatasales-admin">Nomor Rekening</label>
                            <div className="control">
                                <input type="text" className="input-editdatasales-admin" id="nomorRek" placeholder="08222800" required/>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="email" className="labeleditdatasales-admin">Email</label>
                            <div className="control">
                                <input type="text" className="input-editdatasales-admin" id="email" placeholder="namamu@gmail.com" required/>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="kodeTokoAdm" className="labeleditdatasales-admin">Kode Toko</label>
                            <div className="control">
                                <input type="text" className="input-editdatasales-admin" id="kodeTokoAdm" placeholder="g28000t" required/>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="jenis-kelamin" className="labeleditdatasales-admin">Jenis Kelamin</label>
                            <div className="control">
                                {/* <input type="text" className="input-editdatasales-admin" id="jenis-kelamin" placeholder="laki-laki" required/> */}
                                {/* <input type="text" className="input-editdatasales-admin" id="jenis-kelamin" placeholder="laki-laki" required/> */}
                                <select name="" id="" className="input-editdatasales-admin">
                                    <option value="laki-laki">Laki-Laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="alamat" className="labeleditdatasales-admin">Alamat</label>
                            <div className="control">
                                <textarea name="" id="alamat" className="input-editdatasales-admin-textarea">alamat</textarea>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="Keterangan" className="labeleditdatasales-admin">Keterangan</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="Keterangan" className="input-editdatasales-admin-textarea">ada apa</textarea>
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <label htmlFor="profilpic" className="labeleditdatasales-admin">Profile Picture</label>
                            <div className="control">
                                <input type="file" className="input-editdatasales-admin" id="profilpic" />
                            </div>
                        </div>

                        <div className="field-editdatasales-admin">
                            <button className="button-editdatasales mt-5" type="submit">Simpan</button>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default EditDataSales