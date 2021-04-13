import './App.css';
import Home from "./home/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './admin/Admin';
import Mahasiswa from './mahasiswa/Mahasiswa';
import Dosen from './dosen/Dosen';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/mahasiswa" component={Mahasiswa} />
          <Route exact path="/dosen" component={Dosen}/>
        </Switch>
    </Router>
  );
}

export default App;
