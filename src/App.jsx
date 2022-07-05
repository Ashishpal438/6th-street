import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navigation/Navbar';
import { Home } from './Pages/Home/Home';
import { Kids } from './Pages/Kids/Kids';
import { Men } from './Pages/Men/Men';
import { Women } from './Pages/Women/Women';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path='/men' element={<Men/>}/>  
       <Route path='/kids' element={<Kids/>}/>  
     </Routes>
    </div>
  );
}

export default App;
