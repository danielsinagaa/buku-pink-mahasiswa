import React from 'react'
import { Card, Button, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import logoInfor from '../img/inforLogo.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="card" >
            <CardDeck>
                <Card >
                    <CardImg top width="50%" src={logoInfor} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Tambahkan Mahasiswa</CardTitle>
                        <Link to='/admin/mahasiswa' >
                            <Button>Tambah</Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="50%" src={logoInfor} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Tambahkan Dosen</CardTitle>
                        <Link to='/admin/dosen' >
                            <Button>Tambah</Button>
                        </Link>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Home
