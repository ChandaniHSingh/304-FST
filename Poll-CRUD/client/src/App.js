import logo from './logo.svg';
import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom'
import Header from './comp/Header';
import Home from './comp/Home';
import Add from './comp/Add';
import ViewAll from './comp/ViewAll';
import Edit from './comp/Edit';
import Delete from './comp/Delete';
import ViewDetail from './comp/ViewDetail';
import Login from './comp/Login';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/ViewAll" element={<ViewAll/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/Delete/:id" element={<Delete/>}/>
        <Route path="/ViewDetail/:id" element={<ViewDetail/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
