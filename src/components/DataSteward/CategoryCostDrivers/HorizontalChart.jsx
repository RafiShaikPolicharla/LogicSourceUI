import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from 'react-redux';

const chartSetting = {
    yAxis: [
        {
            label: '% Contribution',
        },
    ],
    
    // width: 500,

    height: 300,
};

const valueFormatter = (value) => `${value}%`;

export default function HorizontalChart() {
    const barChartData = useSelector((state) => state.costDriversValue.data.barChartData);

    return (
        <BarChart
            sx={{
                background: "#fff"
            }}
            dataset={barChartData}
            xAxis={[{ scaleType: 'band', dataKey: 'driver_name' }]}
            series={[{ dataKey: 'value', label: 'Cost Drivers', color: "#04ABD7", valueFormatter }]}
            layout="vertical"
            {...chartSetting}
            // loading={true}
        />
    );
}
