/* eslint-disable no-unused-vars */

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Index from "./pages/index.jsx";

import LoginAdmin from "./components/LoginAdmin.jsx";
import DaftarAdmin from "./components/DaftarAdmin.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DataSalesAdmin from "./pages/DataSalesAdmin.jsx";
import EditDataSales from "./pages/EditDataSales.jsx";
import TambahDataSales from "./pages/TambahDataSales.jsx";
import DataBarangAdmin from "./pages/DataBarangAdmin.jsx";
import TambahDataBarang from "./pages/TambahDataBarang.jsx";
import EditDataBarang from "./pages/EditDataBarang.jsx";
import DataPembelianAdmin from "./pages/DataPembelianAdmin.jsx";
import DetailPembelianAdmin from "./pages/DetailPembelianAdmin.jsx";

import LoginUser from "./components/LoginUser.jsx";
import DaftarUser from "./components/DaftarUser.jsx";
import DashboardUser from "./pages/DashboardUser.jsx";
import RiwayatPembayaranUser from "./pages/RiwayatPembayaranUser.jsx";
import DetailPembayaranUser from "./pages/DetailPembayaranUser.jsx";
import ProfileUser from "./pages/ProfileUser.jsx";
import KeranjangUser from "./pages/KeranjangUser.jsx";

import LoginSales from "./components/LoginSales.jsx";
import DaftarSales from "./components/DaftarSales.jsx";
import DashboardSales from "./pages/DashboardSales.jsx";
import RiwayatPembayaranSales from "./pages/RiwayatPembayaranSales.jsx";
import DetailPembayaranSales from "./pages/DetailPembayaranSales.jsx";
import ProfileSales from "./pages/ProfileSales.jsx";
import KeranjangSales from "./pages/KeranjangSales.jsx";


function App() {

  return (
    <>
      
      <BrowserRouter>

        <Routes>

          <Route path="/"  element={<Index />}/>

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/daftar/admin" element={<DaftarAdmin />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/datasalesadmin" element={<DataSalesAdmin />} />
          <Route path="/admin/editdatasales/:id" element={<EditDataSales />} />
          <Route path="/admin/tambahdatasales" element={<TambahDataSales />} />
          <Route path="/admin/databarangadmin" element={<DataBarangAdmin />} />
          <Route path="/admin/tambahdatabarang" element={<TambahDataBarang />} />
          <Route path="/admin/editdatabarang/:id" element={<EditDataBarang />} />
          <Route path="/admin/datapembelianadmin" element={<DataPembelianAdmin />} />
          <Route path="/admin/detailpembelianadmin/:id" element={<DetailPembelianAdmin />} />

          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/daftar/user" element={<DaftarUser />} />
          <Route path="/user/profileuser" element={<ProfileUser />}/>
          <Route path="/user" element={<DashboardUser />}/>
          <Route path="/user/riwayatpembayaranuser/:id" element={<RiwayatPembayaranUser />}/>
          <Route path="/user/detailpembayaranuser/:id" element={<DetailPembayaranUser />}/>
          <Route path="/user/keranjanguser/:id" element={<KeranjangUser />}/>

          <Route path="/login/sales" element={<LoginSales />} />
          <Route path="/daftar/sales" element={<DaftarSales />} />
          <Route path="/sales/profilesales" element={<ProfileSales />}/>
          <Route path="/sales" element={<DashboardSales />}/>
          <Route path="/sales/riwayatpembayaransales/:id" element={<RiwayatPembayaranSales />}/>
          <Route path="/sales/detailpembayaransales/:id" element={<DetailPembayaranSales />}/>
          <Route path="/sales/keranjangsales/:id" element={<KeranjangSales />}/>


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
