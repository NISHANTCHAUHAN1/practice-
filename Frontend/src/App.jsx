import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Add from './components/addUser/Add'
import User from './components/getUser/User'
import Edit from './components/updateUser/Edit'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
       </Routes>
     </BrowserRouter>
    </>
    
  )
}

export default App

