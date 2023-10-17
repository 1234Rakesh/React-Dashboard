import React from 'react';
import './profile.css';
import { AiOutlineDown } from "react-icons/ai";
import { Card} from 'antd';
const Profile = () => (
  <Card
    style={{
        width: 220,
        height:50,
        marginTop:350,
        marginLeft:5,
        backgroundColor:"#003eb3",
        borderColor:"#22075e"
    }}
  >
    <div style={{display:"flex", gap:"3px", alignItems:"center"}}>
    <div className="user"style={{width:"-2px", borderRadius:"32px",}}>
        <img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" alt='' />
    </div>
    <div >
        <h1 style={{fontSize:"10px", color:"white", marginLeft:"2px", marginTop:"-10px"}}>Evane</h1>
        <p style={{fontSize:"8px", marginTop:"-10px", color:"gray"}}>Project Manager</p>
    </div>
     <AiOutlineDown style={{color:"#f0f0f0", marginLeft:"100px", marginTop:"-50px", width:"50px"}}/>
    </div>
  </Card>
);
export default Profile;