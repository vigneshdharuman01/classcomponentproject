import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './component/Loginpage';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route exact path="/" Component={Loginpage}/>
      <Route exact path="/list" Component={List}/>
     </Routes>
      {/* <Routes>
        <Route exact path="/" element={<Loginpage/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes> */}
      </BrowserRouter> 
    </div>
  );
}

export default App;
