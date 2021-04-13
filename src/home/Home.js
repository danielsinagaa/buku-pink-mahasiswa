import React from 'react'
import Image from 'react-bootstrap/Image'
import logoInfor from "../img/inforLogo.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Image src={logoInfor} fluid width={400} />
            <div className="welcome">
                <p>WELCOME</p>
            </div>
            <div className="roleButton">
                <Link to="/admin">
                    <button className="role">ADMIN</button>
                </Link>
                <Link to="/dosen">
                    <button className="role">DOSEN</button>
                </Link>
                <Link to="/mahasiswa">
                    <button className="role">MAHASISWA</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
