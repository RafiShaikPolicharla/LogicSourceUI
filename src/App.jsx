import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  PortfoliOverview,
  SkuLevel,
  BenchmarkPricing,
  ScenarioPlanning,
  CostDrivers,
  DataCube,
  PrivateRoute,
  Settings,
  PageNotFound,
} from './pages';

import { ColorModeContext, useMode } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from 'react';
import { setUserState, updateCurrentSidebarTab } from './redux';
// import Register from './pages/Register';
import Layout from './privateRoute/Layout';
import SignIn from './pages/SignIn';

function App() {
  const [theme, colorMode] = useMode();
  const userLogged = useSelector((state) => state.infraValue.userData.userLogged);
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
            <Suspense fallback={<div>Loading...</div>}>
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
                <Route path='/sku-level' element={<SkuLevel />} />
                <Route path='/data-predictions' element={<Navigate to={"/data-predictions/benchmark-pricing"} />} />
                <Route path='/data-predictions/benchmark-pricing' element={<BenchmarkPricing />} />
                <Route path='/data-predictions/scenario-planning' element={<ScenarioPlanning />} />
                <Route path='/cost-drivers' element={<CostDrivers />} />
                <Route path='/data-cube' element={<DataCube />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/' element={<Navigate to={"/portfolio"} />} />
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