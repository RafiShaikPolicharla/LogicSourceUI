import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';
const chartSetting = {
    yAxis: [
        {
            label: 'Inflation & Unemployment Rate',
        },
    ],
    
    // width: 500,

    height: 300,
};
export default function LinearChart() {
    const lineChartData = useSelector((state) => state.costDriversValue.data.lineChartData);
    console.log({lineChartData})
    return (
        <LineChart
            xAxis={[{ data: [2015, 2016, 2017, 2018, 2019, 2020,2021] }]}
            series={[
                { curve: "linear", data: lineChartData?.series1 || [], showMark: false, valueFormatter: (value) => `${value}`,   color: "#04ABD7", label: "Unemployment ratio" },
                { curve: "linear", data: lineChartData?.series2 || [], showMark: false, color: "#A0C7E5", label: "Inflation",  },
            ]}
            // width={500}
            sx={{
                background: "#fff",

            }}
            slotProps={{
                legend: {
                    direction: 'row',
                    // position: ""

                }
            }}
            {...chartSetting}
            // loading={true}
        />
    );
}
