import * as React from "react";
import Box from "@mui/material/Box";
import {
    DataGrid,
    GridRowEditStopReasons,
} from "@mui/x-data-grid";

import { gridClasses } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import FileSearch from "./FileSearch";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";


export default function FullFeaturedCrudGrid() {
    const tableData = useSelector((state) => state.benchmarkValue.data.tableData);
    const loading = useSelector((state) => state.benchmarkValue.loading);
    const suppliers = ["supplier 1", "supplier 2"]
    const [rows, setRows] = React.useState([]);
    const [rowModesModel, setRowModesModel] = React.useState({});
    console.log({ tableData, rows })
    React.useEffect(() => {
        const rowData = tableData?.data?.length > 0 ? tableData?.data : [...Array(10).keys()].map((val, index) => { return { id: index } })
        console.log({rowData })
        setRows(rowData)
    }, [tableData])
    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };


    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        {
            field: "l5_category",
            headerName: "Level 5 Category",
            width: 140,
            editable: true,
            headerClassName: 'data-grid-headers',

        },
        {
            field: "original_sku_service",
            headerName: "Original SKU Service",
            // type: "number",
            width: 220,
            align: "left",
            headerAlign: "left",
            editable: true,
            headerClassName: 'data-grid-headers',
            renderCell: (params) => {
                return <Box className={"MuiDataGrid-cell MuiDataGrid-cell--textLeft MuiDataGrid-cell--editable"} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <VisibilityOutlinedIcon sx={{ fontSize: "16px", color: '#04ABD7', cursor: "pointer" }} />
                    <Typography>
                        {params.value}
                    </Typography>
                </Box>
                //<-- Mui icons should be put this way here.
            },
        },
        {
            field: "normalized_sku",
            headerName: "Normalized SKU/Service",
            // type: "date",
            width: 180,
            editable: true,
            headerClassName: 'data-grid-headers'
        },
        {
            field: "unit_price",
            headerName: "Unit Price",
            width: 120,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "predicted_price",
            headerName: "Predicted Price",
            width: 120,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "no_of_price_points",
            headerName: "No. of Price Points",
            width: 150,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "low_price",
            headerName: "Low Price",
            width: 120,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "25th_Price",
            headerName: "25th Price",
            width: 120,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "avg_price",
            headerName: "Avg. Price",
            width: 120,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },

    ];

    
    const getSupplierHeader = () => {
        const supplierHeader = []
        suppliers.forEach((supplier) => {
            return supplierHeader.push(...[{ field: `${supplier}_no_of_price_points` }, { field: `${supplier}_low_price` }, { field: `${supplier}_25th_Price` }, { field: `${supplier}_avg_price` }])
        });
        console.log({supplierHeader: [...supplierHeader,{ field: 'no_of_price_points' }, { field: 'low_price' }, { field: '25th_Price' }, { field: 'avg_price' }]})
        return  [...supplierHeader,{ field: 'no_of_price_points' }, { field: 'low_price' }, { field: '25th_Price' }, { field: 'avg_price' }]
    }

    const groupSuppliers = ()=>{

    }
    const columnGroupingModel = [
        {
            groupId: 'Suppliers',
            description: '',
            children: [
                {
                    groupId: <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Search File :
                        </Typography>
                        <FileSearch />
                    </Box>,
                    children: [{ field: 'l5_category' }, { field: "original_sku_service" }, { field: "normalized_sku" }, { field: "unit_price" }, { field: 'predicted_price' },],
                }
            ],
            align: 'center'
        },

        // groupSuppliers(),
        {
            groupId: 'All Suppliers',
            children: [
                {
                    groupId: 'Aggrements',
                    children: getSupplierHeader()
                    //  [{ field: 'no_of_price_points' }, { field: 'low_price' }, { field: '25th_Price' }, { field: 'avg_price' }],
                },
                // { field: 'age' },
            ],
        },
    ];

    return (
        !loading ?
            <Box
                sx={{
                    height: 600,
                    width: "100%",
                    "& .actions": {
                        color: "text.secondary",
                    },
                    "& .textPrimary": {
                        color: "text.primary",
                    },
                    [`.${gridClasses.cell}.primary`]: {
                        backgroundColor: '#F3F8FF',
                        color: 'black',
                    },
                    [`.${gridClasses.cell}.secondary`]: {
                        backgroundColor: '#E9F2E5',
                        color: 'black',
                    },

                }}
            >
                <DataGrid
                    loading={loading}
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    columnGroupingModel={columnGroupingModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    onCellDoubleClick={(params, event) => {
                        // Prevent double-click editing
                        event.defaultMuiPrevented = true;
                    }}
                    disableRowSelectionOnClick
                    getCellClassName={(params) => {
                        if (params.field === 'l5_category' || params.field === "unit_price") {
                            return 'primary';
                        }
                        if (params.field === "predicted_price") {
                            return 'secondary'
                        }
                        // return params.value >= 15 ? 'hot' : 'cold';
                    }}
                    sx={{
                        background: "#fff",
                        '& .MuiDataGrid-row.Mui-selected': {
                            backgroundColor: 'inherit !important',
                        },
                        '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                            outline: 'none', // Remove focus outline
                        },
                        '.MuiDataGrid-columnHeaderTitleContainer': {
                            justifyContent: 'center', // Center align the text in grouped headers
                            fontSize: '14px'
                        },
                        '.MuiDataGrid-columnHeaderTitle': {
                            fontWeight: "550",

                        }
                    }}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                />
            </Box> :
            <Box
                sx={{
                    height: 600,
                    width: "100%",
                    "& .actions": {
                        color: "text.secondary",
                    },
                    "& .textPrimary": {
                        color: "text.primary",
                    },
                    [`.${gridClasses.cell}.primary`]: {
                        backgroundColor: '#F3F8FF',
                        color: 'black',
                    },
                    [`.${gridClasses.cell}.secondary`]: {
                        backgroundColor: '#E9F2E5',
                        color: 'black',
                    },

                }}
            >
                <DataGrid
                    loading={loading}
                    rows={[...Array(10).keys()].map((val, index) => { return { id: index } })}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    columnGroupingModel={columnGroupingModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    onCellDoubleClick={(params, event) => {
                        // Prevent double-click editing
                        event.defaultMuiPrevented = true;
                    }}
                    disableRowSelectionOnClick
                    getCellClassName={(params) => {
                        if (params.field === 'l5_category' || params.field === "unit_price") {
                            return 'primary';
                        }
                        if (params.field === "predicted_price") {
                            return 'secondary'
                        }
                        // return params.value >= 15 ? 'hot' : 'cold';
                    }}
                    sx={{
                        background: "#fff",
                        '& .MuiDataGrid-row.Mui-selected': {
                            backgroundColor: 'inherit !important',
                        },
                        '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                            outline: 'none', // Remove focus outline
                        },
                        '.MuiDataGrid-columnHeaderTitleContainer': {
                            justifyContent: 'center', // Center align the text in grouped headers
                            fontSize: '14px'
                        },
                        '.MuiDataGrid-columnHeaderTitle': {
                            fontWeight: "550",

                        }
                    }}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                />
            </Box>
    );
}
