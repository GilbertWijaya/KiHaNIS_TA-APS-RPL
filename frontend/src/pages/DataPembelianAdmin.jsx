/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataPembelianAdmin.css"
import { Link } from "react-router-dom";

const DataPembelianAdmin = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardpembelianadmin">DATA PEMBELIAN</h1>

                <div className="data-dashboardpembelianadmin">

                    <div className="keterangan-dashboardpembelianadmin-content">

                        <div className="dashboardpembelianadmin-admin">
                            <img className="img-barang-admin" src="/defaultpicture500.jpg" alt="gambar" />
                            <p>Nomor Pembelian</p>
                            <p>Nama Pembeli</p>
                            <div className="action-dashboardpembelianadmin-admin">
                                <Link to="/admin/detailpembelianadmin/:id" className="btn-detail">Detail</Link>
                                <Link to="/admin/detailpembelianadmin/:id" className="btn-verif">Verifikasi</Link>
                            </div>
                        </div>
                        
                        <div className="dashboardpembelianadmin-admin">
                        <img className="img-barang-admin" src="/defaultpicture500.jpg" alt="gambar" />
                            <p>Nomor Pembeli</p>
                            <p>Nama Pembeli</p>
                            <div className="action-dashboardpembelianadmin-admin">
                                <Link to="/admin/detailpembelianadmin/:id" className="btn-detail">Detail</Link>
                                <Link to="/admin/detailpembelianadmin/:id" className="btn-verif">Verifikasi</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataPembelianAdmin