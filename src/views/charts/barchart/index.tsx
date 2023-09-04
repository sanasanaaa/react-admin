import * as echarts from 'echarts';
import { useEffect } from 'react';

import './style.scss';


function BarChartView() { 

    useEffect(() => { 
        var chartDom = document.getElementById('barchartdemo');
        var myChart = echarts.init(chartDom);
        var option;
        
        option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        };
        
        option && myChart.setOption(option);
        return 

    },[])

    return (
        <div  className='barchartcontainer'>
            <div id='barchartdemo' />
        </div>)
}


export default BarChartView
