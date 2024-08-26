
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chart from '../components/Dashboard/Chart';
import Deposits from '../components/Dashboard/Deposits';
import Orders from '../components/Dashboard/Orders';
import { Copyright } from '../utils/helpers';


const PortfolioOverview = () => {
  return (
    <>
      {/* <Toolbar /> */}
      {/* <Container sx={{ mt: 4, mb: 4,  }}> */}
        <Grid container  spacing={2}>
          {/* Chart */}
          <Grid  item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid  item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid  item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4, color: "black" }} />
      {/* </Container> */}
    </>
  )
}

export default PortfolioOverview