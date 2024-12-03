/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataSalesAdmin.css"
import { Link } from "react-router-dom";

const DataSalesAdmin = () => {
    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardadmin">DATA SALES</h1>

                <div className="data-dashboardadmin">

                    <div className="keterangan-dataadmin">

                        <div className="datasales-admin">
                            <p>Nama Sales</p>
                            <p>Email Sales</p>
                            <div className="action-datasales-admin">
                                <Link to="/admin/editdatasales/:id" className="btn-edit">Edit</Link>
                                <Link to="/admin/editdatasales/:id" className="btn-delete">Delete</Link>
                            </div>
                        </div>
                        
                        <div className="datasales-admin">
                            <p>Nama Sales</p>
                            <p>Email Sales</p>
                            <div className="action-datasales-admin">
                                <Link to="/admin/editdatasales/:id" className="btn-edit">Edit</Link>
                                <Link to="/admin/editdatasales/:id" className="btn-delete">Delete</Link>
                            </div>
                        </div>

                        <div className="control">
                            <Link className="btn-tambah-datasales" to="/admin/tambahdatasales">Tambah Data Sales</Link>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataSalesAdmin