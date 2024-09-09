import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterBtn } from '../../redux/Benchmark';
import { Autocomplete, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
]


export default function Filters() {
    const filterBtn = useSelector((state) => state.benchmarkValue.filterBtn);
    const dispatch = useDispatch();
    // const [formData, setFormaData]
    const [skulineItem, setSkuLineItem] = useState('');
    const [pricingSourceType, setPricingSourceType] = useState('');
    const [date, setDate] = useState('');
    const [supplier, setSupplier] = useState([]);
    const [client, setClient] = useState('');
    const [clientSpend, setClientSpend] = useState([1, 4]);
    const [clientIndustry, setClientIndustry] = useState('');
    const [contractDuration, setContractDuration] = useState('');


    const handleClientSpendChange = (event, newValue) => setClientSpend(newValue);

    function valuetext(value) {
        return `${value}mn`;
    }

    const resetFormInputFields = ()=> {
        setSkuLineItem("");
        setPricingSourceType("");
        setDate("");
        setSupplier([]);
        setClient('');
        setClientSpend([1,4]);
        setClientIndustry('');
        setContractDuration("");
    }
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];
    return (
        <div>
            <Drawer
                anchor={"right"}
                open={filterBtn}
                PaperProps={{
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "320px",
                        padding: "58px 30px 16px 30px"
                    }
                }}
            >
                <Box
                    role="presentation"

                // onKeyDown={toggleDrawer()}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#21272A" }}>Filters</Typography>
                        <Button onClick={resetFormInputFields} variant='outlined' style={{ color: "#697077", borderColor: "#697077", borderRadius: '0px' }}> Reset</Button>
                    </Box>
                    <Box >
                        <InputLabel>SKU/Line Item</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px",  }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px',
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
                                value={skulineItem}
                                onChange={e => setSkuLineItem(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>


                        <InputLabel>Pricing Source Type</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px'
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
                                value={pricingSourceType}
                                onChange={e => setPricingSourceType(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <InputLabel>Date</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px'
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
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <InputLabel>Supplier</InputLabel>
                        <Autocomplete
                            value={supplier}
                            fullWidth margin="none" size="small"
                            onChange={(e, value) => {
                                console.log({ e, value });
                                setSupplier(value)
                            }}
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(props, option, { selected }) => {
                                // eslint-disable-next-line react/prop-types
                                const { key, ...optionProps } = props;
                                return (
                                    <li key={key} {...optionProps}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </li>
                                );
                            }}
                            style={{ width: "100%", borderRadius: "0px" }}
                            sx={{
                                background: "#F2F4F8",
                                borderRadius: '0px',
                                marginBottom: "20px",
                                // border: "1px solid blue",
                                "& .MuiOutlinedInput-root": {
                                    // border: "1px solid yellow",
                                    borderRadius: "0",
                                    padding: "0"
                                },
                                // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                //     border: "1px solid #eee"
                                // }
                            }}
                                
                            renderInput={(params) => (
                                <TextField inputProps={{
                                    sx: {
                                        borderRadius: "0px !important"
                                    }
                                }}  {...params} placeholder="Select Text" />
                            )}
                        />

                        <InputLabel>Client Spend</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Slider
                                value={clientSpend}
                                onChange={handleClientSpendChange}
                                min={0}
                                max={5}
                                marks={marks}
                                valueLabelFormat={valuetext}
                                valueLabelDisplay={"on"}
                            />

                        </FormControl>

                        <InputLabel>Client</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px'
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
                                value={client}
                                onChange={e => setClient(e.target.value)}
                            >

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <InputLabel>Client Industry</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px'
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
                                value={clientIndustry}
                                onChange={e => setClientIndustry(e.target.value)}
                            >

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <InputLabel>Contract Duration</InputLabel>
                        <FormControl fullWidth margin="none" sx={{ marginBottom: "20px" }} size="small">
                            <Select
                                sx={{
                                    background: "#F2F4F8",
                                    borderRadius: '0px'
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
                                value={contractDuration}
                                onChange={e => setContractDuration(e.target.value)}
                            >

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>


                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Button onClick={() => {
                        resetFormInputFields()
                        dispatch(updateFilterBtn(false))
                        }} variant="contained" sx={{ boxShadow: "none", fontSize: "14px", color: "#fff", marginLeft: "20px", textTransform: "capitalize", }}>
                        Apply
                    </Button>
                    <Button onClick={() => {
                        resetFormInputFields()
                        dispatch(updateFilterBtn(false))
                        }} sx={{ fontSize: "14px", color: "#21272A", textTransform: "capitalize", }}>
                        Cancel
                    </Button>
                </Box>
            </Drawer>
        </div>
    );
}
