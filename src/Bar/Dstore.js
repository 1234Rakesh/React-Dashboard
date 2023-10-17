import React from 'react';
import { Cascader,  Space } from 'antd';
import {ResponsiveContainer, BarChart, Bar, XAxis} from 'recharts';
const data = [
    {name:'jan',
     value:3500
    },
    {name:'jan',
    value:2500
    },
    {name:'jan',
    value:4900
    },
    {name:'jan',
    value:3500
    },
    {name:'jan',
    value:3800
    },
    {name:'jan',
    value:4000
    },
    {name:'jan',
    value:3500
    },
    {name:'Aug',
     val:5000
    },
    {name:'jan',
    value:4500
    },
    {name:'jan',
    value:3500
    },
    {name:'jan',
    value:3800
    },
    {name:'jan',
    value:3500
    },
]
const Dstore = () => {
  return (
    <div className='bar'>
      <div style={{marginLeft: "600px", padding:"10px", borderRadius:"5px"}}>
      <Space direction="vertical">
        <Cascader
          placeholder="Quarterly"
          style={{
            width: 100,
          }}
        />
      </Space>
      </div>
        <h6 style={{color:"black"}}>Overview <br />
           <h6 style={{color:'gray', fontSize:10}}>Monthly Earing</h6>
        </h6> 
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
           <BarChart data={data} width={500} height={500}>
            <XAxis dataKey="name"/>
              <Bar dataKey="value" fill='#d6e4ff'/>
              <Bar dataKey="val" fill='#1d39c4'/>
           </BarChart>
        </ResponsiveContainer> 
    </div>
  )
}

export default Dstore;

