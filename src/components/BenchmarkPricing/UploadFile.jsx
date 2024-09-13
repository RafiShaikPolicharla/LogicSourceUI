import PropTypes from 'prop-types';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { useDispatch, useSelector } from 'react-redux';
import { updateFileUploadBtn, updateLoading, updateScenarioNameSelected, updateShowScenarioPrice, updateTableData } from '../../redux/Benchmark';
import { Box, Button, CircularProgress, DialogActions, DialogContent, DialogContentText, Divider, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import FileUploadIconSvg from "../../assets/svg-icons/FileUploadIcon.svg"
import CloseIcon from '@mui/icons-material/Close';
import localize from "../../assets/lang/en";
import { useState } from 'react';

function SimpleDialog(props) {
    const loading = useSelector((state) => state.benchmarkValue.loading);

    const { onClose, open } = props;
    const dispatch = useDispatch();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '.pdf , .zip',
        onDrop: (acceptedFiles) => {
            const fileName = acceptedFiles[0]?.path?.split('.')[0];
            dispatch(updateLoading(true));
            setTimeout(() => {
                dispatch(updateTableData({ summaryData: localize.projectBenchmarking.summaryData, tableData: { data: localize.projectBenchmarking.rowData.data, file_name: fileName } }))
                dispatch(updateShowScenarioPrice(false))
                dispatch(updateScenarioNameSelected(""))
                onClose();
                dispatch(updateLoading(false));
            }, [2000])
            // console.log({ acceptedFiles })

        }
    })
    const handleClose = () => {
        onClose();
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
                    <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>Media Upload</Typography>
                    <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, color: "#697077" }}>Add your doucments here accordingly</Typography>
                </Box>
                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
            </DialogTitle>
            <DialogContent>
                <Box sx={{ width: { xs: "230px", md: "502px" } }} {...getRootProps({ className: `dropzone ${isDragActive ? 'dropzone-active' : ''}` })}>
                    {
                        loading ?
                            <>
                                <Box sx={{ height: "205px", width: { xs: "auto", md: "502px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <CircularProgress sx={{ color: "#04ABD7" }} />
                                </Box>
                            </>
                            :
                            <>
                                <input {...getInputProps()} />
                                <Box className='dropzone-content'>
                                    <Box className='icon'>
                                        <img src={FileUploadIconSvg} height={"42px"} width={"42px"} alt={"File Upload Icon"} />
                                    </Box>
                                    {
                                        isDragActive ? (<Typography>Drop the files here...</Typography>) : (<Typography sx={{ color: "#0B0B0B", fontSize: { xs: "12px", md: "14px" } }}>
                                            Drag your file(s) to start uploading
                                            <br />
                                            <Box sx={{ marginTop: "14px", marginBottom: "10px" }}>
                                                <Divider sx={{ fontSize: "12px", color: "#6D6D6D" }}>OR</Divider>
                                            </Box>
                                        </Typography>)
                                    }
                                    <Button disableRipple variant="outlined" sx={{ border: "1px solid #04ABD7", boxShadow: "none", color: "#04ABD7", textTransform: "capitalize" }}>Browse Files</Button>
                                </Box>

                                <DialogContentText sx={{ fontSize: { xs: "12px", md: "14px" }, marginTop: "20px", color: "#697077" }}>
                                    Only support .pdf and zip files
                                </DialogContentText>
                            </>
                    }
                </Box>

            </DialogContent>
            <DialogActions sx={{
                padding: "0px 24px 24px 24px"
            }}>
                <Button variant="outlined" sx={{
                    border: "1px solid #AEADAF", '&:hover': {
                        border: "1px solid #AEADAF",
                    }, boxShadow: "none", color: "#697077", textTransform: "capitalize", fontSize: "14px"
                }} onClick={handleClose}>Cancel</Button>
                <Button variant="contained" sx={{
                    color: "#fff",
                    '&:hover': {
                        backgroundColor: '#04ABD7',
                    }, boxShadow: "none", backgroundColor: "#04ABD7", textTransform: "capitalize", fontSize: "14px"
                }} type="submit">Next</Button>
            </DialogActions>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function UploadFile() {
    const uploadFileBtn = useSelector((state) => state.benchmarkValue.fileUploadBtn);
    const dispatch = useDispatch();


    const handleClose = () => {
        dispatch(updateFileUploadBtn(false))
    };

    return (
        <div>
            <SimpleDialog
                open={uploadFileBtn}
                onClose={handleClose}
            />
        </div>
    );
}
