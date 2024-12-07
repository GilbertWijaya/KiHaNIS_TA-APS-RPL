/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataBarangAdmin.css"
import { Link } from "react-router-dom";
import { getMe } from "../features/authSlice2.js";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react"; 
import axios from "axios";

const DataBarangAdmin = () => {

    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const { user } = useSelector((state) => state.auth_2);

    const getProducts = async() => {
        const response = await axios.get(`http://localhost:1221/api/products/${user.admin.kodeTokoAdm}`);
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    },[]);

    const deleteproduct = async(id) => {
        await axios.delete(`http://localhost:1221/api/products/${id}`);
        getProducts();
    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardbarangadmin">DATA BARANG</h1>

                <div className="data-dashboardbarangadmin">

                    <div className="keterangan-dashboardbarangadmin-content">

                        {
                            products.map((product) => {

                                return (

                                    <div className="dashboardbarangadmin-admin" key={product.id}>
                                        <img className="img-barang-admin" src={ product.ProductPicture || `/defaultpicture500.jpg`} alt="gambar" />
                                        <p>{product.namaBarang}</p>
                                        <p>Rp {product.hargaBarang}</p>
                                        <div className="action-dashboardbarangadmin-admin">
                                            <Link to={`/admin/editdatabarang/${product.id}`} className="btn-edit">Edit</Link>
                                            {/* <Link to="/admin/editdatabarang/:id" className="btn-delete">Delete</Link> */}
                                            <button onClick={() => deleteproduct(product.id)} className="btn-delete">Delete</button>
                                        </div>
                                    </div>


                                )

                            })
                        }

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