import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function Stat({ stats }) {
    console.log(stats);
    const datas = stats.stats.map((s) => s.base_stat);
    const labels = stats.stats.map((s) => s.stat.name);
    console.log("lables", labels);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "stat",
                data: datas,
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }
    return (
        <>
            <Bar data={data} />
        </>

    )
}