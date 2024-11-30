
import "../style/DaftarUser.css"

const DaftarUser = () => {
    return (
        
        <>

            <div className="container-daftaruser">
                
                <div className="formcontainer-daftaruser">
                    <form action="">

                        <div className="content">

                            <div className="navcontainer-daftaruser">
                                <p>SELAMAT DATANG</p>
                                <p>KiHaNIS(Kita Hebat bisNIS)</p>
                            </div>

                            <h1 className="keterangan-daftaruser">DAFTAR USER</h1>

                            <div className="field-daftaruser">
                                <label htmlFor="nama" className="label-daftaruser">Nama</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" id="nama" placeholder="Nama" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="nomorHP" className="label-daftaruser">Nomor HP</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" id="nomorHP" placeholder="081234567890" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="nomorRek" className="label-daftaruser">Nomor Rekening</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" id="nomorRek" placeholder="03471234" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="email" className="label-daftaruser">Email</label>
                                <div className="control-daftaruser">
                                        <input type="text" className="input-daftaruser" id="email" placeholder="email" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="kode-toko" className="label-daftaruser">Kode Toko</label>
                                <div className="control-daftaruser">
                                        <input type="text" id="kode-toko" className="input-daftaruser" placeholder="g2800t" required/>
                                </div>
                            </div>

                            <div className="field-daftaruser">
                                <label htmlFor="password" className="label-daftaruser">password</label>
                                <div className="control-daftaruser">
                                        <input type="password" id="password" className="input-daftaruser" placeholder="********" required/>
                                </div>
                            </div>

                            <div className="field">
                                <button type="submit" className="btn-submit-daftaruser">Login</button>
                            </div>

                            <p className="link1-daftaruser">Belum Punya Akun? <a className="link" href="">DAFTAR</a> </p>
                            <p className="link2-daftaruser"> <a className="link2" href="">lupa password?</a> </p>

                            <div className="loginlain-daftaruser">
                                <p className=" link3-daftaruser"> Masuk Sebagai <a className="link" href="">Admin</a> </p>
                                <p className=" link3-daftaruser"> Masuk Sebagai <a className="link" href="">Sales</a> </p>
                            </div>

                        </div>

                    </form>

                </div>

                <div className="uicontainer-daftaruser">
                    
                    <h1 className="fw-bold app-daftaruser">SELAMAT DATANG</h1>
                    <p className="app-daftaruser2">KiHaNIS(Kita Hebat bisNIS)</p>

                </div>

            </div>
           
        </>

    )
}

export default DaftarUser