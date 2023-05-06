
import Login from "./components/login";
import Signup from "./components/signup";
import Homepage from "./components/homepage";
import {Route,Routes} from 'react-router-dom' ;



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
    </Routes>
  
    
     
    
    
  
    
    
  );
}

export default App;
