import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { Route, Routes } from 'react-router-dom';
import { SearchPage } from './components/searchPage';
import { SearchFinal } from './components/searchFinal';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Home/> */}
        <Route path='/search/:text' element={<SearchPage/>}></Route>
        <Route path="/searchFInal/:id" element={<SearchFinal/>}></Route>

        
      </Routes>
      
     
         
    </div>
  );
}

export default App;
