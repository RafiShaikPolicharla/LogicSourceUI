import { lazy } from 'react'

const PortfoliOverview = lazy(() => import('./PortfolioOverview'));
const SkuLevel = lazy(() => import('./SkuLevel'));
const DataPredictions = lazy(() => import('./DataPredictions'));
const BenchmarkPricing = lazy(() => import('./BenchmarkPricing'));
const ScenarioPlanning = lazy(() => import('./ScenarioPlanning'));
const CostDrivers = lazy(() => import('./CostDrivers'));
const DataCube = lazy(() => import('./DataCube'));
const Settings = lazy(() => import('./Settings'));
const PrivateRoute = lazy(() => import('../privateRoute/PrivateRoute'));
const PageNotFound = lazy(() => import('./PageNotFound'));

export {
    PortfoliOverview,
    SkuLevel,
    DataPredictions,
    BenchmarkPricing,
    ScenarioPlanning,
    CostDrivers,
    DataCube,
    PrivateRoute,
    Settings,
    PageNotFound,
}