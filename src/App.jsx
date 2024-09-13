import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ColorModeContext, useMode } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from 'react';
import { setUserState, updateCurrentSidebarTab } from './redux';

import {
  // PortfoliOverview,
  // BenchmarkPricing,
  PrivateRoute,
  PageNotFound,
  ProjectBenchmarking,
  PriceDetail,
  ImportFiles,
  ClientMaintenance,
  SupplierMaintenance,
  ProductServiceMaintenance,
  Taxonomy,
  CategoryCostDrivers,
  CategoryAnalysis,
} from './pages';
import Layout from './privateRoute/Layout';
import SignIn from './pages/SignIn';
import Loader from './components/common/Loader';

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
            <Suspense fallback={<Loader />}>
          <Routes>

            <Route path="/" element={<Layout />}>
              {
                !userLogged &&
                <>
                  <Route path="/login" element={<SignIn />} />
                </>
              }
              <Route path='/' exact element={<PrivateRoute />} >
                {/* <Route path='/portfolio' exact element={<PortfoliOverview />} /> */}
                {/* <Route path='/benchmark-pricing' exact element={<BenchmarkPricing />} /> */}

                <Route path='/price-analysis' element={<Navigate to={"/price-analysis/project-benchmarking"} />}/>
                <Route path='/price-analysis/project-benchmarking' element={<ProjectBenchmarking />} />
                <Route path='/price-analysis/category-analysis' element={<CategoryAnalysis />} />
                {/* <Route path='/price-detail' element={<PriceDetail />} /> */}
                <Route path='/data-steward' element={<Navigate to={"/data-steward/import-files"} />} />
                <Route path='/data-steward/import-files' element={<ImportFiles />} />
                {/* <Route path='/data-steward/client-maintenance' element={<ClientMaintenance />} />
                <Route path='/data-steward/supplier-maintenance' element={<SupplierMaintenance />} />
                <Route path='/data-steward/product-service-maintenance' element={<ProductServiceMaintenance />} />
                <Route path='/data-steward/taxonomy' element={<Taxonomy />} /> */}
                <Route path='/data-steward/category-cost-drivers' element={<CategoryCostDrivers />} />
                
                <Route path='/' element={<Navigate to={"/price-analysis"} />} />
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