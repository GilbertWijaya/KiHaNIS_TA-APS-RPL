/* eslint-disable no-unused-vars */

import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin.jsx";
import DaftarAdmin from "./components/DaftarAdmin.jsx";

function App() {

  return (
    <>
      
      <BrowserRouter>

        <Routes>

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/daftar/admin" element={<DaftarAdmin />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
