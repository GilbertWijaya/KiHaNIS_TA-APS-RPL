
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/TambahDataSales.css"

const TambahDataSales = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-tambahdatasales">TAMBAH DATA SALES</h1>

                <div className="data-tambahdatasales">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-tambahdatasales-content">

                        <div className="field-tambahdatasales">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatasales" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="nomorHP" className="label">Nomor HP</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatasales" id="nomorHP" placeholder="0822....." required/>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="nomorRek" className="label">Nomor Rekening</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatasales" id="nomorRek" placeholder="08222800" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="email" className="label">Email</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatasales" id="email" placeholder="namamu@gmail.com" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="kodeTokoAdm" className="label">Kode Toko</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatasales" id="kodeTokoAdm" placeholder="g28000t" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="jenis-kelamin" className="label">Jenis Kelamin</label>
                            <div className="control">
                                {/* <input type="text" className="input-tambahdatasales" id="jenis-kelamin" placeholder="laki-laki" required/> */}
                                <select name="" id="" className="input-tambahdatasales">
                                    <option value="laki-laki">laki-laki</option>
                                    <option value="perempuan">perempuan</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="alamat" className="label">Alamat</label>
                            <div className="control">
                                <textarea name="" id="alamat" className="input-tambahdatasales-textarea">alamat</textarea>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="Keterangan" className="label">Keterangan</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="Keterangan" className="input-tambahdatasales-textarea">ada apa</textarea>
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <label htmlFor="profilpic" className="label">Profile Picture</label>
                            <div className="control">
                                <input type="file" name="" id="profilpic" className="input-tambahdatasales" />
                            </div>
                        </div>

                        <div className="field-tambahdatasales">
                            <button className="button-tambahdatasales mt-5" type="submit">Simpan</button>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default TambahDataSales