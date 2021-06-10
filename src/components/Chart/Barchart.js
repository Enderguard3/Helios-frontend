import {createRef, useEffect} from "react"
import getChartDashboard from "../../services/data import/get_chart_dashboard"
import Chart from 'chart.js'

const Barchart = ({from}) => {
    let chart = createRef()
    let data = {
        labels: ["Jan", "Feb", "March", "April", "May"],
        datasets: [
            {
                label: "Ratings",
                data: [86, 67, 91, 105, 100],
            }
        ]
    }

    if (from === "dashboard") {
        let chartData = getChartDashboard()
        data = {
            labels: chartData.map(x => x.date),
            datasets: [
                {
                    label: "Ratings",
                    data: chartData.map(x => x.value)
                }
            ]
        }
    }
    else if (from === "rating") {
        data = {}
    }
    
    useEffect(() => {
        new Chart(chart.current.getContext('2d'), {
            type: "bar",
            data,
            options: {
                scales : {
                    yAxes : [{
                        ticks : {
                            beginAtZero : true
                        }
                    }]
                }
            }
        })
    });

    return (
        <canvas ref={chart}/>
    )
}

export default Barchart