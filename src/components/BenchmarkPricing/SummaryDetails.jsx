import { Box, Typography } from "@mui/material"

const summaryDataColumns = [
  {
    title: "CLIENT",
    key: "client",
    value: "First American Payment Systems IP"
  },
  {
    title: "SUPPLIER",
    key: "supplier",
    value: "First Advantage"
  },
  {
    title: "L3",
    key: "l3",
    value: "Background Screening Service"
  },
  {
    title: "L4",
    key: "l4",
    value: "Background Screening Service"
  },
  {
    title: "PRICING SOURCE",
    key: "pricing_source",
    value: "Agreement"
  }
]

const SummaryDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        gap: "19px",
        overflow: "hidden",
        overflowX: "scroll",
        marginTop: "25px"
      }}
    >
      {
        summaryDataColumns.map((val, index) => {
          return <Box key={index}>
            <Box component={"span"} sx={{color: "rgb(174, 173, 175)",fontSize: {xs: "10px",md: "14px"}, whiteSpace: 'nowrap'}}>{val.title}</Box>
            <Typography sx={{whiteSpace: 'nowrap', fontSize: {md: "18px"}, }}> {val.value} </Typography>
          </Box>
        })
      }
    </Box>
  )
}

export default SummaryDetails