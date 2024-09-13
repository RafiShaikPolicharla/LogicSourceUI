import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import HorizontalChart from './HorizontalChart'
import LinearChart from './LinearChart'
import { useDispatch, useSelector } from 'react-redux';
import { updateData, updateSelectedLevels } from '../../../redux/CostDrivers';
import { useEffect } from 'react';
const barChartDataset = [
  {
      
      value: 3,
      driver_name: 'Inflation',
  },
  {
      
      value:5,
      driver_name: 'Unemployment Rate',
  },
  {
      
      value: 92,
      driver_name: 'Internal',
  },

];
const linearChartDataset = {
  series1: [0, 5, 2, 6, 3, 9],
  series2: [6, 3, 7, 9, 4, 2]
}
const CategoryCostDrivers = () => {
  const selectedLevels = useSelector((state) => state.costDriversValue.selectedLevels);

  const dispatch = useDispatch();

  const handleChange = (key, val) => {
    dispatch(updateSelectedLevels({ ...selectedLevels, [key]: val }));
  }

  useEffect(()=> {
    console.log({selectedLevels})
    if((selectedLevels.l3 !== "" && selectedLevels.l4 !== "" && selectedLevels.l5!=="")){
      setTimeout(()=>{
        dispatch(updateData({barChartData: barChartDataset, lineChartData: linearChartDataset}))
      }, [1000])
    }
  }, [selectedLevels])

  return (
    <div>
      <Box component={"section"}
        sx={{
          padding: "16px 26px 15px 20px",
          display: 'flex',
          flexDirection: "column",
        }}>
          <Grid container columnSpacing={3}>
            <Grid  item xs={12} sm={6} lg={4}>
            <Box>
              <InputLabel>L3</InputLabel>

              <FormControl fullWidth margin="none" sx={{ marginBottom: "20px", }} size="small">
                <Select
                  sx={{
                    background: "#fff",
                    borderRadius: '0px',
                    width: { md: "250px" }
                  }}
                  displayEmpty
                  renderValue={(value) => {
                    if (!value) {
                      return <Typography color="gray">Select Text</Typography>;
                    }
                    return value;
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectedLevels["l3"]}
                  name='l3'
                  onChange={e => handleChange(e.target.name, e.target.value)}
                >
                  <MenuItem value={"Background Screening Services"}>Background Screening Services</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <Box>

              <InputLabel>L4</InputLabel>
              <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                <Select
                  sx={{
                    background: "#fff",
                    borderRadius: '0px !important',
                    width: { md: "250px" }
                  }}
                  displayEmpty
                  renderValue={(value) => {
                    if (!value) {
                      return <Typography color="gray">Select Text</Typography>;
                    }
                    return value;
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectedLevels["l4"]}
                  name='l4'
                  onChange={e => handleChange(e.target.name, e.target.value)}
                >
                  <MenuItem value={"Background Screening Services"}>Background Screening Services</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
            <Box>

              <InputLabel>L5</InputLabel>
              <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                <Select
                  sx={{
                    background: "#fff",
                    borderRadius: '0px !important',
                    width: { md: "250px" }
                  }}
                  displayEmpty
                  renderValue={(value) => {
                    if (!value) {
                      return <Typography color="gray">Select Text</Typography>;
                    }
                    return value;
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectedLevels["l5"]}
                  name='l5'
                  onChange={e => handleChange(e.target.name, e.target.value)}
                >
                  <MenuItem value={"Background Screening Services"}>Background Screening Services</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </Grid>
          </Grid>
        <Box sx={{ marginBottom: "30px" }}>
          <HorizontalChart />

        </Box>
        <LinearChart />
      </Box>
    </div>
  )
}
export default CategoryCostDrivers;