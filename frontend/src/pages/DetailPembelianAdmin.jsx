
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DetailPembelianAdmin.css"

const DetailPembelianAdmin = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-detailpembelian">DETAIL PEMBELIAN</h1>

                <div className="data-detailpembelian">

                    <div className="img-detailpembelian">
                        <img className="dataimg-detailpembelian" src="./public/defaultpicture500.jpg" alt="gambar" />
                    </div>

                    <div className="keterangan-detailpembelian-content">

                        <div className="field">
                            <label htmlFor="nama" className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" id="nama" placeholder="nama" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="namaSales" className="label">Nama Sales</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" id="harga" placeholder="yanto dadar" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="status" className="label">Status Pembayaran</label>
                            <div className="control">
                                <input type="text" className="input-detailpembelian" id="status" placeholder="acc" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="dataBarang" className="label">Data Barang</label>
                            <div className="control">
                                {/* <input type="text" className="input-dashboardadmin" id="Keterangan" placeholder="Keterangan" required/> */}
                                <textarea name="" id="dataBarang" className="input-detailpembelian-textarea">Data Barang</textarea>
                            </div>
                        </div>

                        <div className="field">
                            {/* <button className="button-detailpembelian mt-5" type="submit">Simpan</button> */}
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DetailPembelianAdmin