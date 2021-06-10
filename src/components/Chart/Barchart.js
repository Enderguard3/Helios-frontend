import {createRef, useEffect} from "react"
import getChartDashboard from "../../services/data import/get_chart_dashboard"
import getChartRating from "../../services/data import/get_chart_rating"
import Chart from 'chart.js'

const Barchart = ({from}) => {
    let chart = createRef()
    let data = {}

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
        let chartData = getChartRating()
        data = {
            labels: chartData.map(x => x.criteria),
            datasets: [
                {
                    label: "Game",
                    data: chartData.map(x => x.game)
                },
                {
                    label: "Average",
                    data: chartData.map(x => x.avg)
                }
            ]
        }
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