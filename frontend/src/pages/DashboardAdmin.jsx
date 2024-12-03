
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DashboardAdmin.css"

const DashboardAdmin = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardadmin">PROFIL ANDA</h1>

                <div className="data-dashboardadmin">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-dataadmin">

                        <div className="field-admin">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="nomorHP" className="label">Nomor HP</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="nomorHP" placeholder="0822....." required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="nomorRek" className="label">Nomor Rekening</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="nomorRek" placeholder="08222800" required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="email" className="label">Email</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="email" placeholder="namamu@gmail.com" required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="kodeTokoAdm" className="label">Kode Toko</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="kodeTokoAdm" placeholder="g28000t" required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="jenis-kelamin" className="label">Jenis Kelamin</label>
                            <div className="control-admin">
                                <input type="text" className="input-dashboardadmin" id="jenis-kelamin" placeholder="laki-laki" required/>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="alamat" className="label">Alamat</label>
                            <div className="control-admin">
                                <textarea name="" id="alamat" className="input-dashboardadmin-textarea">alamat</textarea>
                            </div>
                        </div>

                        <div className="field-admin">
                            <label htmlFor="Keterangan" className="label">Keterangan</label>
                            <div className="control-admin">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="Keterangan" className="input-dashboardadmin-textarea">ada apa</textarea>
                            </div>
                        </div>

                        <div className="field-admin">
                            <button className="button-dashboardadmin mt-5" type="submit">Simpan</button>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DashboardAdmin