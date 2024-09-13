import { Box, CircularProgress } from "@mui/material"

const Loader = () => {
    return (
        <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress sx={{ color: "#04ABD7" }} />
        </Box>
    )
}

export default Loader