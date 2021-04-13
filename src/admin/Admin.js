import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddDosen from './AddDosen'
import AddMahasiswa from './AddMahasiswa'
import Home from './Home'
import Nav from './Nav'

const Admin = () => {
    return (
        <Router>
        <Nav />
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route exact path="/admin/dosen" component={AddDosen} />
          <Route exact path="/admin/mahasiswa" component={AddMahasiswa} />
        </Switch>
    </Router>
    )
}

export default Admin
