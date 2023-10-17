import React from "react";
import { Card, Input, Cascader } from "antd";
import { GoSearch } from "react-icons/go";
const Tabdata = () => (
  <Card
    style={{
      width: 1130,
      marginTop: "-40px",
      marginLeft: "-35px",
    }}
  >
         <h5 style={{fontSize:"15px", fontWeight:"5px", marginLeft:"-1000px"}}>Product Sell</h5>
         <p style={{fontSize:"10px", fontWeight:"5px", marginLeft:"-1000px",color:"gray",marginBottom:"-60px"}}>Product Name</p>
    <div className="d-flex gap-3 align-items-center">
            <Input
              style={{ width: 150, marginLeft: "805px" }}
              size="small"
              placeholder="search"
              prefix={<GoSearch />}
            />
            <Cascader
          placeholder="Last 30 days"
          style={{
            width: 150,
          }}
        />
          </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" >
            </th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <div style={{display:"flex", alignItems:"center"}}>
            <img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" alt="" />
            <h5 style={{fontSize:"15px", marginLeft:"8px", fontFamily:"revert"}}>Abstract 3D</h5>
             <p style={{fontSize:"10px", marginTop:"40px", color:"gray", marginLeft:"-80px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
        <th >
          <div style={{display:"flex", alignItems:"center"}}>
            <img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" alt="" />
            <h5 style={{fontSize:"15px", marginLeft:"8px", fontFamily:"revert"}}>Sarphens Illustraction</h5>
             <p style={{fontSize:"10px", marginTop:"40px", color:"gray", marginLeft:"-145px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
            </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </Card>
);
export default Tabdata;
