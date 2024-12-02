/* eslint-disable no-unused-vars */

import "../style/KeranjangSales.css";
import TemplateSales from "./TemplateSales";

const KeranjangSales = () => {
    return (
        
        <>

            <TemplateSales>

                <div className="keranjangsales-container">

                    <h1>KERANJANG ANDA</h1>

                    <div className="keranjangsales-content">

                        <form action="">

                            <div className="keranjangsales-item">
                                <label htmlFor="namapembeli" className="label-nama">NAMA PEMBELI</label>
                                <div className="control">
                                    <input type="text" id="namapembeli" className="input-keranjangsales-nama" placeholder="nama pembeli" required/>
                                </div>
                            </div>

                            <div className="keranjangsales-item">


                                <div className="field">
                                    
                                    <h5>Nama Produk</h5>
                                    <h6>Harga Produk</h6>
                                    {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                    <div className="control">
                                        <input type="number" id="jumlahbarang" className="input-keranjangsales" min={1}  placeholder="1" required/>
                                    </div>

                                </div>

                            </div>

                            <div className="keranjangsales-item">

                                <div className="field">
                                    
                                    <h5>Nama Produk</h5>
                                    <h6>Harga Produk</h6>
                                    {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                    <div className="control">
                                        <input type="number" id="jumlahbarang" className="input-keranjangsales" min={1}  placeholder="1" required/>
                                    </div>

                                </div>

                            </div>

                            <div className="action">
                                <button className="btn-submit" type="submit">CHECK OUT</button>
                            </div>

                        </form>
                    </div>

                </div>

            </TemplateSales>

        </>

    )
}

export default KeranjangSales