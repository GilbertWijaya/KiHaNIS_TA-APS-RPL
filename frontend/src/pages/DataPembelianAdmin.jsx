/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import TemplateAdmin from "./TemplateAdmin.jsx";
import "../style/DataPembelianAdmin.css"
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getMe } from "../features/authSlice2.js";
import { useState,useEffect } from "react";
import axios from "axios";

const DataPembelianAdmin = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    const {user} = useSelector((state) => state.auth_2);

    const [dataPembelian, setDataPembelian] = useState([]);

    const getNota = async() => {
        const response = await axios.get(`http://localhost:1221/api/nota/admin/${user.admin.kodeTokoAdm}`);
        setDataPembelian(response.data);
    }

    useEffect(() => {
        getNota();
    },[]);

    const verifikasiNota = async(id) => {
        await axios.patch(`http://localhost:1221/api/nota/${id}`);
        getNota();
    }

    return (
        
        <>

            <TemplateAdmin>
                
                <h1 className="keterangan-dashboardpembelianadmin">DATA PEMBELIAN</h1>

                <div className="data-dashboardpembelianadmin">

                    <div className="keterangan-dashboardpembelianadmin-content">

                        {
                            dataPembelian.map((data) => {

                                return(

                                    <div className="dashboardpembelianadmin-admin" key={data.id}>
                                        <img className="img-barang-admin" src={data.buktiPembayaran || `/defaultpicture500.jpg`} alt="gambar" />
                                        <p>{data.id}</p>
                                        <p>{data.namaPembeli}</p>
                                        <div className="action-dashboardpembelianadmin-admin">
                                            <Link to={`/admin/detailpembelianadmin/${data.id}`} className="btn-detail">Detail</Link>
                                            {/* <Link to="/admin/detailpembelianadmin/:id" className="btn-verif">Verifikasi</Link> */}
                                            <button onClick={() => verifikasiNota(data.id)} className="btn-verif">Verifikasi</button>
                                        </div>
                                    </div>


                                )

                            })

                        }

                    </div>

                </div>

            </TemplateAdmin>

        </>

    )
}

export default DataPembelianAdmin