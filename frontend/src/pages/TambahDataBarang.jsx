
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/TambahDataBarang.css"

const TambahDataBarang = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-tambahdatabarang">TAMBAH DATA BARANG</h1>

                <div className="data-tambahdatabarang">

                    <div className="img-dataadmin">
                        <img className="dataimg" src="/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-tambahdatabarang-content">

                        <div className="field-tambahdatabarang">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatabarang" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatabarang">
                            <label htmlFor="harga" className="label">harga</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatabarang" id="harga" placeholder="28000" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatabarang">
                            <label htmlFor="kodeBarang" className="label">Kode Barang</label>
                            <div className="control">
                                <input type="text" className="input-tambahdatabarang" id="KodeBarang" placeholder="11112222" required/>
                            </div>
                        </div>

                        <div className="field-tambahdatabarang">
                            <label htmlFor="Keterangan" className="label">Keterangan</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="Keterangan" className="input-tambahdatabarang-textarea">ada apa</textarea>
                            </div>
                        </div>

                        <div className="field-tambahdatabarang">
                            <label htmlFor="productpic" className="label">Product Picture</label>
                            <div className="control">
                                <input type="file" className="input-tambahdatabarang" id="productpic" />
                            </div>
                        </div>

                        <div className="field-tambahdatabarang">
                            <button className="button-tambahdatabarang mt-5" type="submit">Simpan</button>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default TambahDataBarang