import PropTypes from 'prop-types';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { useDispatch, useSelector } from 'react-redux';
import { updateCreateScenarioPrice, updateFileUploadBtn, updateScenarioNameSelected, updateShowScenarioPrice, } from '../../redux/Benchmark';
import { Box, Button, Checkbox, DialogActions, DialogContent, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Select, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const columns = [
    { id: 'select_scenario', label: "Select Scenairo" },
    { id: 'scenario_name', label: 'Scenario Name' },
    {
        id: 'unemployment_rate',
        label: 'Unemployment Rate',
    },
    {
        id: 'inflation_rate',
        label: 'Inflation Rate',
    }
]
const rows = [
    {
        "select_scenario": "",
        scenario_name: "Scenario 1",
        unemployment_rate: "3.6",
        inflation_rate: "4.1",
    },
    {
        "select_scenario": "",
        scenario_name: "Scenario 2",
        unemployment_rate: "3.7",
        inflation_rate: "4.1",
    },
    {
        "select_scenario": "",
        scenario_name: "Scenario 3",
        unemployment_rate: "3.6",
        inflation_rate: "4.14",
    },
]
const useStyles = makeStyles({
    table: {
        maxWidth: 800,
        "& .MuiTableCell-root": {
            // borderLeft: "1px solid #0000001A"
        }
    }
});
function SimpleDialog(props) {
    const { onClose, open } = props;
    const dispatch = useDispatch();
    const classes = useStyles();
    const [selectedRow, setSelectedRow] = useState(null);
    const { handleSubmit, register } = useForm();
    // Handle radio selection change
    const handleRadioChange = (event) => {
        setSelectedRow(event.target.value);
    };
    const handleClose = () => {
        onClose();
    };

    const handleConfirmDialog = () => {
        console.log({ selectedRow })
        const scenarioName = rows[selectedRow]?.scenario_name;
        dispatch(updateScenarioNameSelected(scenarioName));
        dispatch(updateShowScenarioPrice(false))
    }

    const onSubmit = (value) => {
        alert(JSON.stringify(value));
    };
    return (
        <Dialog

            open={open}>
            {/* <DialogTitle>Set backup account</DialogTitle> */}
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    padding: { xs: "24px 24px 9px 24px", md: "24px 24px 18px 24px" },
                }}
            >   <Box>
                    <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>Scenario Explorer</Typography>
                </Box>
                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
            </DialogTitle>
            <DialogContent sx={{ maxWidth: "700px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper
                        variant='outlined'
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                    >
                        <Typography component='h1' variant='h3' align='center'>
                            Create Scenario
                        </Typography>
                        <Divider />

                        <Box sx={{ my: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel sx={{ textAlign: 'left' }}>Scenario Name</FormLabel>
                                    <TextField
                                        required
                                        sx={{
                                            background: "#F2F4F8",
                                            borderRadius: '0px'
                                        }}
                                        size='small'
                                        fullWidth
                                        variant='outlined'

                                        {...register('scenarioName')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel sx={{ textAlign: 'left' }}>Change of cost drivers</FormLabel>
                                    <RadioGroup
                                        required
                                        defaultValue='percentage'
                                        row
                                        {...register('changeOfCost')}
                                    >
                                        <FormControlLabel
                                            value='percentage'
                                            control={<Radio />}
                                            label='Percentage'
                                            name='cost-drivers'
                                        />
                                        <FormControlLabel
                                            value='absolute'
                                            name='cost-drivers'
                                            control={<Radio />}
                                            label='Absolute'
                                        />
                                    </RadioGroup>
                                    <Box sx={{ display: "flex" }}>

                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormLabel sx={{ textAlign: 'left' }}>Unemployment Ratio</FormLabel>
                                    <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                                        <Select
                                            sx={{
                                                background: "#F2F4F8",
                                                borderRadius: '0px !important'
                                            }}
                                            displayEmpty
                                            renderValue={(value) => {
                                                if (!value) {
                                                    return <Typography color="gray">Select Text</Typography>;
                                                }
                                                return value;
                                            }}
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            variant='outlined'
                                        {...register('unemployment_ratio')}

                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel sx={{ textAlign: 'left' }}>Inflation Rate</FormLabel>
                                    <Select
                                        required
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        {...register('infaltion_rate')}
                                    >
                                        <MenuItem value='USA'>USA</MenuItem>
                                        <MenuItem value='America'>America</MenuItem>
                                        <MenuItem value='Nigeria'>Nigeria</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Box>

                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row-reverse" }}>

                            <Button
                                variant="contained"
                                sx={{
                                    color: "#fff",
                                    '&:hover': {
                                        backgroundColor: '#04ABD7',
                                    }, boxShadow: "none",
                                    backgroundColor: "#04ABD7",
                                    textTransform: "capitalize",
                                    fontSize: "14px"
                                }}
                                type="submit"
                            // onClick={handleConfirmDialog}
                            >
                                Generate Scenario
                            </Button>
                        </Grid>
                    </Paper>
                </form>
                <TableContainer >
                    <Table className={classes.table} aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, whiteSpace: 'nowrap', minWidth: column.minWidth, backgroundColor: '#F3F8FF', fontSize: "12px", fontWeight: "700", color: "#020202" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, id) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={"center"} sx={{ padding: "0px", color: "#020202", fontSize: "12px", }}>
                                                    {
                                                        index == 0 ?
                                                            <>
                                                                <Radio
                                                                    checked={selectedRow == id}
                                                                    onChange={handleRadioChange}
                                                                    value={id}
                                                                    name="radio-buttons"
                                                                />
                                                            </> :
                                                            value
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

            </DialogContent>
            <DialogActions sx={{
                padding: "0px 24px 24px 24px"
            }}>
                <Button
                    variant="contained"
                    sx={{
                        color: "#fff",
                        '&:hover': {
                            backgroundColor: '#04ABD7',
                        }, boxShadow: "none",
                        backgroundColor: "#04ABD7",
                        textTransform: "capitalize",
                        fontSize: "14px"
                    }}
                    // type="submit"
                    disabled={!selectedRow}
                    onClick={handleConfirmDialog}
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function ViewScenario() {
    const createScenarioPrice = useSelector((state) => state.benchmarkValue.createScenarioPrice);
    const dispatch = useDispatch();


    const handleClose = () => {
        dispatch(updateCreateScenarioPrice(false))
    };

    return (
        <div>
            <SimpleDialog
                open={createScenarioPrice}
                onClose={handleClose}
            />
        </div>
    );
}
