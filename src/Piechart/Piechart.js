import React from 'react';
import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const Piechart = () => {
    const data = {

        datasets:[{
            label:'Poll',
            data:[2,3, 5],
            backgroundColor:['#eb2f96', '#722ed1','#d6e4ff' ],
            borderColor: ['#eb2f96', '#722ed1','#d6e4ff']
        }]
    }
const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart,args, pluginOptions) {
        const {ctx} = chart;

        ctx.save();
        ctx.font = 'bolder 30px sans-serif';
        ctx.fillStyle = 'red';
        ctx.fillText(`data.datasets[0].data`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
}
// const options = {

// }
  return (
    <div>
      <h6 style={{color:"black"}}>Customers<br />
           <h6 style={{color:'gray', fontSize:10}}>customers that buy products</h6>
        </h6>
      <div>
        <Doughnut
         data={data}
        >

         plugins = {[textCenter]}
        </Doughnut>
      </div>
    </div>
  )
}

export default Piechart
