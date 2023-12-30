import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function Stat({ stats }) {
    const name = stats.name;
    const datas = stats.stats.map((s) => s.base_stat);
    const labels = stats.stats.map((s) => s.stat.name);

    const data = {
        labels: labels,
        datasets: [
            {
                label: name,
                data: datas,
                backgroundColor:
                    [
                        "rgba(247,167,102)",
                        "rgba(247,133,88)",
                        "rgba(219,89,44)",
                        "rgba(188,43,83)",
                        "rgba(178,41,86)",
                        "rgba(195,19,19)"
                    ],
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