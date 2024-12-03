
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/EditDataBarang.css"

const EditDataBarang = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-editdatabarang">EDIT DATA BARANG</h1>

                <div className="data-editdatabarang">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-editdatabarang-content">

                        <div className="field">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input-editdatabarang" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="harga" className="label">harga</label>
                            <div className="control">
                                <input type="text" className="input-editdatabarang" id="harga" placeholder="28000" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="kodeBarang" className="label">Kode Barang</label>
                            <div className="control">
                                <input type="text" className="input-editdatabarang" id="KodeBarang" placeholder="11112222" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="Keterangan" className="label">Keterangan</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="Keterangan" className="input-editdatabarang-textarea">ada apa</textarea>
                            </div>
                        </div>

                        <div className="field">
                            <button className="button-editdatabarang mt-5" type="submit">Simpan</button>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default EditDataBarang