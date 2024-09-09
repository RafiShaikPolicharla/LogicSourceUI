import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  // PortfoliOverview,
  // SkuLevel,
  BenchmarkPricing,
  ScenarioPlanning,
  CostDrivers,
  DataCube,
  PrivateRoute,
  Settings,
  PageNotFound,
  PortfoliOverview,
} from './pages';

import { ColorModeContext, useMode } from './styles/theme';
import { Box, CircularProgress, ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from 'react';
import { setUserState, updateCurrentSidebarTab } from './redux';
// import Register from './pages/Register';
import Layout from './privateRoute/Layout';
import SignIn from './pages/SignIn';

function App() {
  const [theme, colorMode] = useMode();
  const userLogged = useSelector((state) => state.appValue.userData.userLogged);
  const dispatch = useDispatch();
  console.log({ userLogged })
  useEffect(() => {
    const currentTab = window.location.pathname || "";
    const user = JSON.parse(localStorage.getItem('userData'));
    if (!userLogged) {
      dispatch(setUserState(user));
    }
    dispatch(updateCurrentSidebarTab(currentTab));
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
            <Suspense fallback={<Box sx={{height: "100vh",display: "flex", justifyContent:"center", alignItems: "center"}}><CircularProgress sx={{color: "#04ABD7"}}/></Box>}>
          <Routes>

            <Route path="/" element={<Layout />}>
              {
                !userLogged &&
                <>
                  <Route path="/login" element={<SignIn />} />
                  {/* <Route path="register" element={<Register />} /> */}
                </>
              }
              <Route path='/' exact element={<PrivateRoute />} >
                <Route path='/portfolio' exact element={<PortfoliOverview />} />
                {/* <Route path='/sku-level' element={<SkuLevel />} /> */}
                <Route path='/benchmark-pricing' exact element={<BenchmarkPricing />} />
                <Route path='cost-driver-analysis' element={<Navigate to={"/cost-driver-analysis/cost-drivers"} />} />
                <Route path='/cost-driver-analysis/cost-drivers' element={<CostDrivers />} />
                {/* <Route path='/cost-driver-analysis/scenario-planning' element={<ScenarioPlanning />} /> */}
                {/* <Route path='/data-predictions' element={<Navigate to={"/data-predictions/benchmark-pricing"} />} />
                <Route path='/data-predictions/benchmark-pricing' element={<BenchmarkPricing />} />
                <Route path='/data-predictions/scenario-planning' element={<ScenarioPlanning />} /> */}
                {/* <Route path='/cost-drivers' element={<CostDrivers />} /> */}
                <Route path='/data-cube' element={<DataCube />} />
                {/* <Route path='/settings' element={<Settings />} /> */}
                <Route path='/' element={<Navigate to={"/benchmark-pricing"} />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Route>

          </Routes>
            </Suspense>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;