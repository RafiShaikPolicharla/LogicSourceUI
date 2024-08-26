import { Box, Grid, Paper, Typography } from '@mui/material';

import PageTitle from "./PageTitle"
import Chart from '../Dashboard/Chart';
import Deposits from '../Dashboard/Deposits';
import Orders from '../Dashboard/Orders';
import { Copyright } from '@material-ui/icons';
import { Chip } from '@material-ui/core';
function getChipProps(value) {
    if (value >= 0) {
        return {
            // icon: <IoGitPullRequestOutline style={{ color: blue[500], fontSize: "20px" }} />,
            label: `+${value}%`,
            style: {
                background: "#99F1FD",
                fontSize: "12px",
                padding: "0px"
            }
        };
    }
    else{
        return {
            // icon: <WarningAmberIcon style={{ fill: red[500] }} />,
            label:  `-${value}%`,
            style: {
                background: "#04ABD7",
                color: "white",
                fontSize: "12px",
                padding: "0px"
                }
            };
        }
    // if (params.value.includes("In_Progress")) {
    //     return {
    //         icon: <div style={{ display: "flex", alignItems: "center" }}>
    //             <span style={{ paddingLeft: "10px", paddingRight: "5px" }}>
    //                 {params.value?.replace("_", " ")}
    //             </span>
    //             <span className="dot-animation dot-1">.</span>
    //             <span className="dot-animation dot-2">.</span>
    //             <span className="dot-animation dot-3">.</span>
    //         </div>,
    //         label: "",
    //         style: {
    //             borderColor: yellow[500]
    //         }
    //     };
    // }
    // if (params.value.includes("Completed")) {
    //     return {
    //         icon: <CheckCircleIcon style={{ fill: green[500] }} />,
    //         label: params.value,
    //         style: {
    //             borderColor: green[500]
    //         }
    //     };
    // }
    // if (params.value.includes("Failed")) {
    //     return {
    //         icon: <WarningAmberIcon style={{ fill: red[500] }} />,
    //         label: params.value,
    //         style: {
    //             borderColor: red[500]
    //         }
    //     };
    // }
    return null
}


const PortFolio = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} >
                <PageTitle />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {/* Chart */}
                    <Grid item xs={12} sm={6} md={6} lg={3} >
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                // height: 50,
                            }}
                        >
                            {/* <Chart /> */}
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Box>
                                    <Typography>Total Suppliers</Typography>
                                    <span style={{fontSize: "20px", fontWeight: 700}}>12</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems: "flex-end"}}>
                                    <Chip variant="outlined" {...getChipProps(2.5)} />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                // height: 50,
                            }}
                        >
                            {/* <Deposits /> */}
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Box>
                                    <Typography>Total Client</Typography>
                                    <span style={{fontSize: "20px", fontWeight: 700}}>43</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems: "flex-end"}}>
                                    <Chip variant="outlined" {...getChipProps(-1.5)} />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'  }}>
                            {/* <Orders /> */}
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Box>
                                    <Typography >Total Contract Managed</Typography>
                                    <span style={{fontSize: "20px", fontWeight: 700}}>29</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems: "flex-end"}}>
                                    <Chip variant="outlined" {...getChipProps(11)} />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'  }}>
                            {/* <Orders /> */}
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Box>
                                    <Typography>Total Contract Value</Typography>
                                    <span style={{fontSize: "20px", fontWeight: 700}}>$29,29,578</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems: "flex-end"}}>
                                    <Chip variant="outlined" {...getChipProps(5.2)} />
                                </Box>
                            </Box> 
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4, color: "black" }} />
            {/* <Grid item xs={12} >
                <Grid container >

                    <Grid sx={{ background: "white", border: '1px solid red' }} item xs={12} sm={3}>
                        one
                    </Grid>
                    <Grid sx={{ background: "white", border: '1px solid red' }} item xs={12} sm={3}>
                        two
                    </Grid>
                    <Grid sx={{ background: "white", border: '1px solid red' }} item xs={12} sm={3}>
                        three
                    </Grid>
                    <Grid sx={{ background: "white", border: '1px solid red' }} item xs={12} sm={3}>
                        four
                    </Grid>
                </Grid>
            </Grid> */}


        </Grid>

    )
}

export default PortFolio