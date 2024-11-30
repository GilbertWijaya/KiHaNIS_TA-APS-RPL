/* eslint-disable no-unused-vars */

import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin.jsx";
import DaftarAdmin from "./components/DaftarAdmin.jsx";
import LoginUser from "./components/LoginUser.jsx";
import DaftarUser from "./components/DaftarUser.jsx";
import LoginSales from "./components/LoginSales.jsx";
import DaftarSales from "./components/DaftarSales.jsx";

function App() {

  return (
    <>
      
      <BrowserRouter>

        <Routes>

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/login/sales" element={<LoginSales />} />
          <Route path="/daftar/admin" element={<DaftarAdmin />} />
          <Route path="/daftar/user" element={<DaftarUser />} />
          <Route path="/daftar/sales" element={<DaftarSales />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
