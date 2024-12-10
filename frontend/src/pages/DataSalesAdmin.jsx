/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataSalesAdmin.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { getMe } from "../features/authSlice2.js";
import { useSelector,useDispatch } from "react-redux";

const DataSalesAdmin = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const [sales,setSales] = useState([]);

    const {user} = useSelector((state) => state.auth_2);
    // console.log(user);
    

    const getSales = async() => {
        const response = await axios.get(`http://localhost:1221/api/sales/${user.admin.kodeTokoAdm}`);
        setSales(response.data);
    };

    useEffect(() => {
        getSales();
    },[]);

    const deleteSales = async(id) =>{
        await axios.delete(`http://localhost:1221/api/sales/${id}`);
        getSales();
    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardadmin">DATA SALES</h1>

                <div className="data-dashboardadmin">

                    <div className="keterangan-dataadmin">

                        {
                            sales.map((sale,index) => {

                                return(

                                    <div className="datasales-admin" key={index}>
                                        <p>{sale.name}</p>
                                        <p>{sale.email}</p>
                                        <div className="action-datasales-admin">
                                            <Link to={`/admin/editdatasales/${sale.id}`} className="btn-edit">Edit</Link>
                                            {/* <Link to="/admin/editdatasales/:id" className="btn-delete">Delete</Link> */}
                                            <button onClick={() => deleteSales(sale.id)} className="btn-delete">Delete</button>
                                        </div>
                                    </div>

                                )

                            })

                        }

                        {/* <div className="control">
                            <Link className="btn-tambah-datasales" to="/admin/tambahdatasales">Tambah Data Sales</Link>
                        </div> */}

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataSalesAdmin