import React, { useContext } from 'react';
import { BoardContext } from "../provider/BoardProvider";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterBoard({ boardId, data }) {
    const { getBoardById } = useContext(BoardContext);
    const board = getBoardById(boardId)
    const title = board.name
    const axes = board.axes
    const options = {
        plugins: {
            title: {
                display: true,
                text: "Test chart",
                position: "top"
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return [
                            context.raw.title || "",
                            `${axes.x.name} ${context.parsed.x.toLocaleString()} ${axes.x.unit}`,
                            `${axes.y.name} ${context.parsed.y.toLocaleString()} ${axes.y.unit}`
                        ];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: axes.x.name
                },
                beginAtZero: true,
                max: axes.x.max || 12,
                min: 0,
            },
            y: {
                title: {
                    display: true,
                    text: axes.y.name
                },
                beginAtZero: true,
                max: axes.y.max || 12,
                min: 0,
            },
        }
    };
    return <Scatter options={options} data={{
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    }} />;
}
