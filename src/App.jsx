import { useState } from 'react'
import {Menu} from 'antd'
import { Routes, Route, useNavigate } from 'react-router-dom'
import 
{ HomeOutlined, DashboardOutlined, 
  UploadOutlined, SettingOutlined, PoweroffOutlined }
   from '@ant-design/icons';

function App() {

  const navigate = useNavigate()
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <div>
        <Menu 
        onClick={({key})=>{
          if(key == 'logout'){
            //To do logout function here
          } else {
            navigate(key)
          }
        }}
        items={[
          {label:'Home', key:'/', icon:<HomeOutlined/>},
          {label:'DashBoard', key:'/dashboard', icon:<DashboardOutlined/> },
          {label:'Uploads' , key:'/uploads', icon:<UploadOutlined/>},
          {label:'Settings', key:'/settings', icon:<SettingOutlined/>},
          //{label:'Log Out', key:'/logout', icon:<PoweroffOutlined/>, danger:'true'}
         ]}>
        </Menu>
        <Content/>
      </div>
    </div>
  )
}

function Content(){
  return (
  <div>
    <Routes>
      <Route path='/' element={<div>Home IM home</div>}></Route>
      <Route path='/dashboard' element={<div>Home IM dashboard</div>}></Route>
      <Route path='/uploads' element={<div>Home IM uploads</div>}></Route>
      <Route path='/settings' element={<div>Home IM settings</div>}></Route>
    </Routes>
  </div>
  )
}
export default App
