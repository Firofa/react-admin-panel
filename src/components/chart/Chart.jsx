import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {

  return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <Legend />
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
