import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {ValueScale, Animation} from '@devexpress/dx-react-chart';

const ChartItem = ({data}) => {
  return (
    <Paper>
      <Chart
        data={data}
      >
        <ValueScale name="price"/>

        <ArgumentAxis/>
        <ValueAxis scaleName="price" showGrid={false} showLine showTicks/>

        <BarSeries
          name="Цена товара"
          valueField="price"
          argumentField="date"
          scaleName="price"
        />
        <Animation/>
        <Legend/>
      </Chart>
    </Paper>
  );
}

export default ChartItem
