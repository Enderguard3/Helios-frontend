import {createRef, useEffect} from "react";
import Chart from 'chart.js'

const Barchart = ({className}) => {
    let chart = createRef()

    useEffect(() => {
        new Chart(chart.current.getContext('2d'), {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Rating",
                        data: [86, 67, 91, 105, 100, 96, 120],
                    }
                ]
            },
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
        <canvas ref={chart} className={className}/>
    )
}

export default Barchart