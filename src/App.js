//import logo from './logo.svg';
import './Components/FormPage.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Parent from './Components/Parent';
import {useSelector} from 'react-redux'
import Redux from './Components/Redux';
import EditProfile from './Components/EditProfile';
import FormPage from './Components/FormPage';






function App() {

const users = useSelector(state => state.users)

  return (
  <div className="App">
<Router>

<Routes>

<Route path="/" element={<Parent/>}></Route>
<Route path='redux' element={ <Redux/> }/>
<Route path='formpage' element={ <FormPage/> }/>
<Route path='/editprofile' element={ <EditProfile/>}/>

</Routes>

    </Router>
     




     
    </div>
  );
}

export default App;
