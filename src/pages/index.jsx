import { lazy } from 'react'

const PortfoliOverview = lazy(() => import('./PortfolioOverview'));
const BenchmarkPricing = lazy(() => import('./BenchmarkPricing'));
const PrivateRoute = lazy(() => import('../privateRoute/PrivateRoute'));
const PageNotFound = lazy(() => import('./PageNotFound'));
const ProjectBenchmarking = lazy(()=> import('./ProjectBenchmarking'));
const CategoryAnalysis = lazy(()=> import('./CategoryAnalysis'));
const PriceDetail = lazy(()=> import('./PriceDetail'));
const ImportFiles = lazy(()=> import('./ImportFiles'));
const ClientMaintenance = lazy(()=> import('./ClientMaintenance'));
const SupplierMaintenance = lazy(()=> import('./SupplierMaintenance'));
const ProductServiceMaintenance = lazy(()=> import('./ProductServiceMaintenance'));
const Taxonomy = lazy(()=> import('./Taxonomy'));
const CategoryCostDrivers = lazy(()=> import('./CategoryCostDrivers'));


export {
    ProjectBenchmarking,
    CategoryAnalysis,
    PriceDetail,
    ImportFiles,
    ClientMaintenance,
    SupplierMaintenance,
    ProductServiceMaintenance,
    Taxonomy,
    CategoryCostDrivers,
    PortfoliOverview,
    BenchmarkPricing,
    PrivateRoute,
    PageNotFound,
}