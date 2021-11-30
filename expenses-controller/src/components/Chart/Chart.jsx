import React from 'react';

import './Chart.css'

import ChartBar from './ChartBar'

const Chart = ({dataPoints}) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    console.log(dataPoints.map(dataPoint => dataPoint.value))

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}/>
            ))}
        </div>
    )

} 

export default Chart