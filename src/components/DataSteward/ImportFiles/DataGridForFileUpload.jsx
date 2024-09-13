import * as React from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
    GridRowModes,
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
    randomId,
} from "@mui/x-data-grid-generator";



const initialRows = [
    {
        id: randomId(),
        l3: "Background Screening Services",
        package_flag: "Package",
        product_service_type: "Services",
        l5: "Verification Services",
        package: "a lacarte screening features",
        sku_name: "Education Verification - Per School"
    },
    {
        id: randomId(),
        l3: "Background Screening Services",
        package_flag: "Package",
        product_service_type: "Services",
        l5: "Verification Services",
        package: "a lacarte screening features",
        sku_name: "Education Verification - 7 year - Per Employer"
    },
    {
        id: randomId(),
        l3: "Background Screening Services",
        package_flag: "Package",
        product_service_type: "Services",
        l5: "Verification Services",
        package: "a lacarte screening features",
        sku_name: "Licensing/Credential Verification"
    },
    {
        id: randomId(),
        l3: "Background Screening Services",
        package_flag: "Package",
        product_service_type: "Services",
        l5: "Criminal History",
        package: "a lacarte screening features",
        sku_name: "Criminal Felony & Misdemeanor - 7 Years - 1 Country"
    },
    {
        id: randomId(),
        l3: "Background Screening Services",
        package_flag: "Package",
        product_service_type: "Services",
        l5: "Criminal History",
        package: "a lacarte screening features",
        sku_name: "Federal Criminal Search - Per District - 7 Years"
    },
];

export default function FullFeaturedCrudGrid() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
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
            field: "l3",
            headerName: "L3",
            width: 180,
            editable: true,
            headerClassName: 'data-grid-headers',
        },
        {
            field: "package_flag",
            headerName: "Package Flag",
            // type: "number",
            width: 130,
            align: "left",
            headerAlign: "left",
            editable: true,
            headerClassName: 'data-grid-headers'
        },
        {
            field: "product_service_type",
            headerName: "Product Service Type",
            // type: "date",
            width: 130,
            editable: true,
            headerClassName: 'data-grid-headers'
        },
        {
            field: "l5",
            headerName: "L5(Sub-Category)",
            width: 220,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "package",
            headerName: "Package",
            width: 220,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "sku_name",
            headerName: "Product Service SKU Name Normalized",
            width: 220,
            editable: true,
            headerClassName: 'data-grid-headers'
            // type: "singleSelect",
            // valueOptions: ["Market", "Finance", "Development"],
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            width: 100,
            cellClassName: "actions",
            headerClassName: 'data-grid-headers',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                console.log({ isInEditMode, rowModesModel, GridRowModes })

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key={id}
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: "primary.main",
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            key={id}
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        key={id}
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        key={id}
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box
            sx={{
                height: 500,
                width: "100%",
                "& .actions": {
                    color: "text.secondary",
                },
                "& .textPrimary": {
                    color: "text.primary",
                },
            }}
        >
            <DataGrid

                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                onCellDoubleClick={(params, event) => {
                    // Prevent double-click editing
                    event.defaultMuiPrevented = true;
                }}
                disableRowSelectionOnClick
                sx={{
                    background: "#fff",
                    '& .MuiDataGrid-row.Mui-selected': {
                        backgroundColor: 'inherit !important',
                    },
                    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                        outline: 'none', // Remove focus outline
                    },
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </Box>
    );
}
