import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import {  Grid } from '@mui/material';
// import Container from "@material-ui/core/Container";
import { CssBaseline, Box , Container, Toolbar   } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSidebarToggle } from '../redux';
import { useState } from 'react';
const drawerWidth = 240;
export const PrivateRoute = () => {
  const dispatch = useDispatch();
  
  const sideBartoggle =  useSelector((state) => state.appValue.sidebarToggle);
  // const [tabView, setTabView] = useState(false);  
    const toggleDrawer = () => {
        dispatch(updateSidebarToggle(!sideBartoggle))
        // setTabView(!tabView)
    };
  const userData = localStorage.getItem('userData');
  return userData ?
    <>
      {/* <Grid container >
        <Grid item md={12}>
          
          <Navbar />
        </Grid>
        <Grid item md={4}>
          <Sidebar />
        </Grid>
        <Grid item md={8}>
          <Outlet />
        </Grid>
      </Grid>
      <Footer /> */}
      
    <Box Container sx={{ display: 'flex', background: '#F5F7F6', flexDirection: 'column' }}>
      <CssBaseline />
      {/* <Toolbar /> */}
      <Navbar handleDrawerToggle={toggleDrawer} handleTab />
      {/* <Container   sx={{ display: 'flex', flexGrow: 1 }}> */}
        <Sidebar mobileOpen={sideBartoggle}  handleDrawerToggle={toggleDrawer} />
        <Box
          component="main"
          sx={{
            color: "black",
            
            flexGrow: 1,
            p: {xs: "0px", sm: 0 },
            pt: 0,
            height: " calc(100vh - 68px)",
            // mt: "64px",
            // // marginLeft: "20px",
            // marginBottom: "20px",
            // marginRight: "20px",
            // ml: {xs: "20px", sm: "249px", md: "269px",  }, // Adjust for sidebar width on large screens
            m: {xs: "68px 0px 0px 0px ", sm: "68px 0px 0px 0px ", md: "0px 0px 0px 269px",  }, // Adjust for sidebar width on large screens
          }}
        >
          <Outlet />
        </Box>
      {/* </Container> */}
    </Box>
    </>
    : <Navigate to="/login" />;
};

export default PrivateRoute