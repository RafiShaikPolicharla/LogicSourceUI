import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CalendarIcon, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { Button, InputAdornment, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {

    return (
        <Box sx={{ width: '100%' }}>
                <Box sx={{ display:{xs: "block", sm: "flex"} ,justifyContent: "space-between", alignItems: "center", borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ borderBottom: 2, fontSize: "16px", fontWeight: "700", paddingBottom: '19px', borderColor: '#04ABD7' }}>
                    Portfolio Overview
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                    <ClearableProp />
                    <Box sx={{ padding: "12px 12px 12px 12px", display:"flex", background: "#99F1FD", color: "grey" }}>
                        <ArrowForwardIcon />
                    </Box>
                    <ClearableProp />
                    <Box >
                    <Box component={"button"}  border={"none"} sx={{ padding: "12px 12px 12px 12px", cursor:"pointer", display:"flex", background: "#04ABD7", color: "white" }}>
                    <FilterAltOutlinedIcon />
                    </Box>
                    </Box>
                
                </Box>
            </Box>

        </Box>
    );
}

function ClearableProp() {
    const [cleared, setCleared] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [cleared]);

    return (
        // <LocalizationProvider dateAdapter={AdapterDayjs}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            InputProps={{
                disableUnderline: true,
               }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            svg: {
                                color: "red", // Change the color here
                            },
                            border: 'none'
                        }}
                    />
                )}
                //   slotProps={{
                //     textField: {
                //      InputProps: {
                //       endAdornment: (
                //        <InputAdornment
                //         sx={{
                //          color: "#979797",
                //          cursor:"pointer"
                //         }}
                //         position="end"
                //        >
                //         <CalendarIcon />
                //         {/* <KeyboardArrowDownIcon /> */}
                //        </InputAdornment>
                //       ),
                //      },
                //     },
                //    }}
                slots={{ openPickerIcon: KeyboardArrowDownIcon }}
                PaperProps={{
                    sx: {
                        "& .MuiPickersDay-root": {
                            "&:hover": {
                                backgroundColor: "transparent", // Remove hover effect on days
                            },
                            "&:focus": {
                                backgroundColor: "transparent", // Remove focus effect on days
                            },
                        },
                        "& .MuiButtonBase-root": {
                            "&:hover": {
                                backgroundColor: "transparent", // Remove hover effect on buttons
                            },
                        },
                        "& .MuiIconButton-root": {
                            "&:hover": {
                                backgroundColor: "transparent", // Remove hover effect on navigation icons
                            },
                        },
                        "& .MuiPickersYear-yearButton": {
                            "&:hover": {
                                backgroundColor: "transparent", // Remove hover effect on year selection
                            },
                        },
                        "& .MuiPickersMonth-root": {
                            "&:hover": {
                                backgroundColor: "transparent", // Remove hover effect on month selection
                            },
                        },
                    },
                }}

                slotProps={{ textField: { variant: 'standard', } }}
                sx={{
                    padding: "8px 10px",
                    // height: "50px",
                    border: "none",
                    background: "white",
                    width: "150px",
                    "& .MuiInputLabel-root.Mui-focused": { color: "#979797" },
                    "& .MuiIconButton-root": {
                        color: "grey",
                    },//styles the label
                    "& .MuiOutlinedInput-root": {
                        "&:hover > fieldset": { borderColor: "#C7C8CD" },
                        height: "48px",
                        borderRadius: "0px",
                        color: "grey",
                        border: "none"
                    },
                }}
                label="" />
        </LocalizationProvider>

    );
}

