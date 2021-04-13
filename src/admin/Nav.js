import React from 'react'
import { Navbar, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <Navbar expand="md" style={{background:"#035B71"}}>
            <Link to='/admin' >
                <NavLink className='navBar'>HOME</NavLink>
            </Link>
            <Link to='/admin/mahasiswa'>
                <NavLink className='navBar'>TAMBAH MAHASISWA</NavLink>
            </Link>
            <Link to='/admin/dosen'>
                <NavLink className='navBar'>TAMBAH DOSEN</NavLink>
            </Link>
        </Navbar>
    )
}

export default Nav
