/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataBarangAdmin.css"
import { Link } from "react-router-dom";

const DataBarangAdmin = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardbarangadmin">DATA BARANG</h1>

                <div className="data-dashboardbarangadmin">

                    <div className="keterangan-dashboardbarangadmin-content">

                        <div className="dashboardbarangadmin-admin">
                            <img className="img-barang-admin" src="defaultpicture500.jpg" alt="gambar" />
                            <p>Nama Barang</p>
                            <p>Harga Barang</p>
                            <div className="action-dashboardbarangadmin-admin">
                                <Link to="/admin/editdatabarang/:id" className="btn-edit">Edit</Link>
                                <Link to="/admin/editdatabarang/:id" className="btn-delete">Delete</Link>
                            </div>
                        </div>
                        
                        <div className="dashboardbarangadmin-admin">
                        <img className="img-barang-admin" src="defaultpicture500.jpg" alt="gambar" />
                            <p>Nama Barang</p>
                            <p>Harga Barang</p>
                            <div className="action-dashboardbarangadmin-admin">
                                <Link to="/admin/editdatabarang/:id" className="btn-edit">Edit</Link>
                                <Link to="/admin/editdatabarang/:id" className="btn-delete">Delete</Link>
                            </div>
                        </div>

                        <div className="control">
                            <Link className="btn-tambah-databarang" to="/admin/tambahdatabarang">Tambah Data Barang</Link>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataBarangAdmin