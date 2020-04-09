import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Chart = ({data:{confirmed,recovered,deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
             setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length
        ? (            
            <Line
                data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    fill: true,
                    borderColor: '#3949ab',
                    backgroundColor: 'rgba(0, 255, 255, 0.4)',
                    borderWidth: 3,
                    pointStyle: 'star', 
                },                 
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    fill: true,                    
                    borderColor: '#a02725',
                    backgroundColor: 'rgba(255, 0, 0)',
                    borderWidth: 3,
                    pointStyle: 'star',                    
                }]                         
            }}
            options = {{
                legend: {labels:{fontColor:'#FFBC00', fontFamily:'Rubik'}},
                tooltips: {mode:'point'},                
                scales: {yAxes:[{
                    ticks:{
                        fontColor: '#FFBC00',
                        fontFamily: 'Rubik',
                        beginAtZero: true,                    
                        padding: 20
                    },
                    gridLines: {
                        display: true,
                        color: '#9DBAC9'                        
                    }
                }],
                xAxes:[{
                    ticks:{
                        fontColor: '#FFBC00',
                        fontFamily: 'Rubik',
                        padding: 10,
                    },
                    gridLines: {
                        display: false,
                    }
                }]
            }
            }}  
            />            
        ) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'people',
                        backgroundColor: ['#1976d2','#81c784','#d32f2f'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`, fontColor:'#FFBC00'},
                    scales: {yAxes:[{
                        ticks:{
                            fontColor: '#FFBC00',
                            fontFamily: 'Rubik',
                            beginAtZero: true,                    
                            padding: 20
                        },
                        gridLines: {
                            display: true,
                            color: '#9DBAC9'                        
                        }
                    }],
                    xAxes:[{
                        ticks:{
                            fontColor: '#FFBC00',
                            fontFamily: 'Rubik',
                            padding: 10,
                        },
                        gridLines: {
                            display: false,
                        }
                    }]
                }
                }}
            />
        ) : null
    );

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;