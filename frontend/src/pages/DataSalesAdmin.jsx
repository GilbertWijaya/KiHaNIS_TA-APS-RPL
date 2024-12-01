
// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataSalesAdmin.css"

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
                                <a className="btn-edit">Edit</a>
                                <a className="btn-delete">Delete</a>
                            </div>
                        </div>
                        
                        <div className="datasales-admin">
                            <p>Nama Sales</p>
                            <p>Email Sales</p>
                            <div className="action-datasales-admin">
                                <a className="btn-edit">Edit</a>
                                <a className="btn-delete">Delete</a>
                            </div>
                        </div>

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataSalesAdmin