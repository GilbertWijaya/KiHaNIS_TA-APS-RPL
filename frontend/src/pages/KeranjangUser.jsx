/* eslint-disable no-unused-vars */

import "../style/KeranjangUser.css";
import TemplateUser from "./TemplateUser";

const KeranjangUser = () => {
    return (
        
        <>

            <TemplateUser>

                <div className="keranjanguser-container">

                    <h1>KERANJANG ANDA</h1>

                    <div className="keranjanguser-content">

                        <form action="">

                            <div className="keranjanguser-item">


                                <div className="field">
                                    
                                    <h5>Nama Produk</h5>
                                    <h6>Harga Produk</h6>
                                    {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                    <div className="control">
                                        <input type="number" id="jumlahbarang" className="input-keranjanguser" min={1}  placeholder="1" required/>
                                    </div>

                                </div>

                            </div>

                            <div className="keranjanguser-item">

                                <div className="field">
                                    
                                    <h5>Nama Produk</h5>
                                    <h6>Harga Produk</h6>
                                    {/* <label htmlFor="jumlahbarang">Jumlah Barang</label> */}
                                    <div className="control">
                                        <input type="number" id="jumlahbarang" className="input-keranjanguser" min={1}  placeholder="1" required/>
                                    </div>

                                </div>

                            </div>

                            <div className="action">
                                <button className="btn-submit" type="submit">CHECK OUT</button>
                            </div>

                        </form>
                    </div>

                </div>

            </TemplateUser>

        </>

    )
}

export default KeranjangUser