import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'
import AdminLayout from './components/layout/admin'        // phải viết hóa chữ cái đầu nếu không sẽ không chạy được
import HomePage from './pages/homepage'
import HomeAdmin from './pages/admin/homeAdmin'
import Admin_them from './pages/admin/createAdmin'
//trang chi tiết
import DetailsProduct from './pages/detailsProduct'
// các trang login , signin
import Signup from './pages/user/signup'
import SignInHome from '../src/pages/user/signin'
// 1. Khai báo router react-router-dom
import { Link } from 'react-router-dom'

function App() {

  return <BrowserRouter>
    <Routes>
    <Route path='dangnhap' element={<SignInHome/>}/>  
        <Route path='dangky' element={<Signup/>}/> 

      {/* trang page người dùng */}
      <Route path='/' element={<UserLayout/>}> {/* user layout */}
        <Route index element={<HomePage/>}/> 
        <Route path='product/:id' element={<DetailsProduct/>}/>
        <Route path='gio-hang' element={<h1>gio hang</h1>}/>
      </Route>

      {/* trang đadmin*/}
      <Route path='/user' element={<Admin_them/>}> 
      <Route  path='create' element={<Admin_them/>}/> 
        <Route  path='update' element={<h1>cập nhật</h1>}/> 
      </Route>



    </Routes>
  </BrowserRouter>
}

export default App
