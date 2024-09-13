import { Box } from '@mui/material'
import Title from './Title'
import SummaryDetails from './SummaryDetails'
// import BenchmarkTable from './BenchmarkTable'
import Filters from './Filters'
import UploadFile from './UploadFile'
import Bookmarks from './Bookmarks'
import ViewScenario from './ViewScenario'
import CreateScenario from './CreateScenario'
import DataGridTable from './DataGridTable'

const index = () => {

  return (
    <Box component={"section"}
      sx={{
        padding: "16px 26px 15px 20px",
        display: 'flex',
        flexDirection: "column",
      }}
    >
      <Title />
      <SummaryDetails />
      <DataGridTable />
      {/* <BenchmarkTable /> */}
      <UploadFile />
      <Filters />
      <Bookmarks />
      <ViewScenario />
      <CreateScenario />
    </Box>
  )
}

export default index