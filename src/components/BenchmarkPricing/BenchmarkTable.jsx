import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box } from '@mui/material';
import FILTER_SVG from "../../assets/svg-icons/filter-main-color.svg";
import { useSelector } from 'react-redux';
import localize from "../../assets/lang/en";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            borderLeft: "1px solid #0000001A"
        }
    }
});


export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();
    const showScenarioPrice = useSelector((state) => state.benchmarkValue.showScenarioPrice);
    const scenarioNameSelected = useSelector((state) => state.benchmarkValue.scenarioNameSelected);
    const tableData = useSelector((state) => state.benchmarkValue.data.tableData) || [];
    const rows = tableData?.data?.length > 0 ? tableData?.data : [...Array(10).keys()];

    const columns = localize.projectBenchmarking.columnData;


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', marginTop: "25px" }}>
            <TableContainer sx={{}}>
                <Table className={classes.table} aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell align="left" colSpan={5}>
                                <div style={{ color: "#020202", fontSize: "14px" }}>Price Benchmark </div>
                                <span style={{ color: "rgb(174, 173, 175)" }}>supplier</span>
                            </TableCell> */}
                            <TableCell align="left" colSpan={10}>
                                <span style={{ color: "#020202", fontSize: "14px", fontWeight: 700 }}>All Suppliers</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" colSpan={5}>
                                <span style={{ color: "#020202", fontSize: "14px" }}>File : </span>
                                <span style={{ color: "#020202", fontSize: "14px", fontWeight: 700 }}>{tableData.file_name || ""}</span>
                                {/* First advantage - u.s.amendment_executed 4-28-23 */}

                            </TableCell>
                            <TableCell align="left" colSpan={5}>
                                <span style={{ color: "#020202", fontSize: "14px", fontWeight: 700 }}>All Price Sources</span>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, whiteSpace: 'nowrap', minWidth: column.minWidth, backgroundColor: '#F3F8FF', fontSize: "14px", fontWeight: "700", color: "#020202" }}
                                >
                                    {
                                        index === 4 ?
                                            <>
                                                {
                                                    scenarioNameSelected!=="" ? scenarioNameSelected : "Scenario Price"
                                                }
                                            </>
                                            :
                                            (
                                                index === 0 || index === 1 || index === 2 ?
                                                    <>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }} >
                                                            {column.label} <img style={{ cursor: "pointer" }} src={FILTER_SVG} alt="Filter Icon" width={20} height={20} />
                                                        </Box>
                                                    </>
                                                    :
                                                    <>
                                                        {column.label}
                                                    </>
                                            )
                                    }

                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row,) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} sx={{ color: "#020202", fontSize: "14px", background: `${index === 4 ? "#E9F2E5" : (index === 0 || index === 3 ? "#F3F8FF" : '')}` }}>
                                                    {
                                                        index === 4 ?
                                                            (
                                                                scenarioNameSelected ? <>{value}</> : ""
                                                            ) :
                                                            (
                                                                (tableData?.data?.length > 0 && index === 1) ?
                                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                                        <RemoveRedEyeOutlinedIcon sx={{ fontSize: "16px", color: '#04ABD7', cursor: "pointer" }} /> {value}
                                                                    </Box> :
                                                                    value
                                                            )
                                                    }


                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{ fontSize: '14px' }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
