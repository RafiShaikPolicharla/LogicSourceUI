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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            borderLeft: "1px solid #0000001A"
        }
    }
});
const columns = [
    { id: 'l5_category', label: "L5(Category)" },
    { id: 'sku_item_original', label: 'SKU/Item Original' },
    {
        id: 'sku_normalized_name',
        label: 'SKU Normalized Name',
    },
    {
        id: 'unit_price',
        label: 'Unit Price',
    },
    {
        id: 'scenario_price',
        label: 'Scenario Price',
    },
    {
        id: 'min_price',
        label: 'Min Price',
    },
    {
        id: '25th_price',
        label: '25th Price',
    },
    {
        id: 'avg_price',
        label: 'Avg Price',
    },
    {
        id: '75th_price',
        label: '75th Price',
    },
    {
        id: 'max_price',
        label: 'Max Price',
    },
];


const rows = [
    {
        "l5_category": "Identification",
        sku_item_original: "ssn trace",
        sku_normalized_name: "SSN Trace",
        unit_price: "$0.95",
        scenario_price: "$1.00",
        min_price: "$0.08",
        "25th_price": "$0.78",
        avg_price: "$1.00",
        "75th_price": "$1.70",
        max_price: "$9.00",
    },
    {
        "l5_category": "Criminal History",
        sku_item_original: "felony and misdemeanor (up to two indexes at single courthouse)",
        sku_normalized_name: "Criminal Felony & Misdemeanor - 7 years - 1 County",
        unit_price: "$6.10",
        scenario_price: "$6.5",
        min_price: "$4.50",
        "25th_price": "$5.50",
        avg_price: "$5.93",
        "75th_price": "$7.50",
        max_price: "$9.50",
    },
    {
        "l5_category": "Criminal History",
        sku_item_original: "national criminal record file- adjudicated (1 name)",
        sku_normalized_name: "Federal Criminal Search - Per District - 7 Years",
        unit_price: "$4.10",
        scenario_price: "$4.25",
        min_price: "$2.00",
        "25th_price": "$3.50",
        avg_price: "$4.25",
        "75th_price": "$5.50",
        max_price: "$9.75",
    },
    {
        "l5_category": "Ris & Compliance",
        sku_item_original: "motor vehicle check (driving record)",
        sku_normalized_name: "Motor Vehicle Report",
        unit_price: "$1.95",
        scenario_price: "$2.00",
        min_price: "$0.70",
        "25th_price": "$1.25",
        avg_price: "$1.76",
        "75th_price": "$2.00",
        max_price: "$2.75",
    },
    {
        "l5_category": "Verificaiton Services",
        sku_item_original: "education verification (per institution)",
        sku_normalized_name: "Education Verification Per School",
        unit_price: "$5.60",
        scenario_price: "$6.25",
        min_price: "$5.60",
        "25th_price": "$6.25",
        avg_price: "$6.90",
        "75th_price": "$7.05",
        max_price: "$11.00",
    },
    {
        "l5_category": "Verfication Services",
        sku_item_original: "employment verification (standard handling is 3 attempts over 3 days)",
        sku_normalized_name: "Employment Verification - 7 Year - Per Employer",
        unit_price: "$5.60",
        scenario_price: "$6.00",
        min_price: "$5.40",
        "25th_price": "$6.00",
        avg_price: "$6.80",
        "75th_price": "$7.20",
        max_price: "$8.00",
    },
    {
        "l5_category": "Adverse Action Fulfillment",
        sku_item_original: "adverse action letter mailing service-per letter (u.s. based custom) ",
        sku_normalized_name: "Ancillary Services",
        unit_price: "$4.25",
        scenario_price: "$5.00",
        min_price: "$1.00",
        "25th_price": "$2.00",
        avg_price: "$3.50",
        "75th_price": "$5.00",
        max_price: "$7.00",
    },

];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();
    const showScenarioPrice = useSelector((state) => state.benchmarkValue.showScenarioPrice);

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
                            <TableCell align="left" colSpan={5}>
                                <div style={{ color: "#020202", fontSize: "14px" }}>Price Benchmark </div>
                                <span style={{ color: "rgb(174, 173, 175)" }}>supplier</span>
                            </TableCell>
                            <TableCell align="left" colSpan={5}>
                                <span style={{ color: "#020202", fontSize: "14px", fontWeight: 700 }}>All Suppliers</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" colSpan={5}>
                                <span style={{ color: "#020202", fontSize: "14px" }}>File : </span>
                                <span style={{ color: "#020202", fontSize: "14px", fontWeight: 700 }}>First advantage - u.s.amendment_executed 4-28-23</span>

                            </TableCell>
                            <TableCell align="left" colSpan={5}>
                                <span style={{ color: "#020202", fontSize: "14px" }}>All Agreements</span>
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
                                        index === 1 || index === 2 ?
                                            <>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }} >
                                                    {column.label} <img style={{ cursor: "pointer" }} src={FILTER_SVG} alt="Filter Icon" width={20} height={20} />
                                                </Box>
                                            </>
                                            :
                                            <>
                                                {column.label}
                                            </>
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
                                                <TableCell key={column.id} align={column.align} sx={{ color: "#020202", fontSize: "14px", background: `${index === 0 || index === 3 ? "#F3F8FF" : ''}` }}>
                                                    {
                                                        index === 4 ?
                                                            (
                                                                !showScenarioPrice ? <>{value}</> : ""
                                                            ) :
                                                            (
                                                                index === 1 ?
                                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                                        <RemoveRedEyeOutlinedIcon sx={{ color: '#04ABD7', cursor: "pointer" }} /> {value}
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
