import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Stat() {
    const data = {
        labels: ["force", "attack", "defense"],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '39',
                data: [1, 3, 7],
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    return (
        <>
            <Doughnut data={data} />
        </>

    )
}