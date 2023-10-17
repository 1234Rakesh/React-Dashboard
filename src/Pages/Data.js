import React from 'react';
import { Progress, Tooltip, Space } from 'antd';
import 'chart.js';
const Data = () => (
  <>
    <Space wrap>
      <h1>Customers</h1>
      <p>customers that buy products</p>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="circle"
        />
      </Tooltip>
    </Space>
  </>
);
export default Data;