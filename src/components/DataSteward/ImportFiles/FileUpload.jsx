
import { useDispatch } from 'react-redux';
// import { updateFileUploadBtn, updateScenarioNameSelected, updateShowScenarioPrice, updateTableData } from '../../redux/Benchmark';
import { Box, Button, CircularProgress, Divider, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import FileUploadIconSvg from "../../../assets/svg-icons/FileUploadIcon.svg"
import localize from "../../../assets/lang/en";
import { useState } from 'react';
import { updateFileUploaded, updateTableData } from '../../../redux/DataSteward';



export default function FileUpload() {
    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '.pdf , .zip',
        onDrop: (acceptedFiles) => {
            setLoading(true);
            setTimeout(() => {
                dispatch(updateTableData({fileName:localize.dataSteward.rowData.file_name,  summaryData: localize.dataSteward.summaryData, tableData: { data: localize.dataSteward.rowData.data } }))
                dispatch(updateFileUploaded(true))
                // dispatch(updateScenarioNameSelected(""))
                setLoading(false);
            }, [2000])
            console.log({ acceptedFiles })

        }
    })


    return (
        <Box sx={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{ background: "white", width: { xs: "230px", md: "502px" } }} {...getRootProps({ className: `dropzone ${isDragActive ? 'dropzone-active' : ''}` })}>
                    {
                        loading ?
                            <>
                                <Box sx={{ height: "204px", width: { xs: "auto", md: "502px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
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

                                <Box sx={{ fontSize: { xs: "12px", md: "14px" }, marginTop: "20px", color: "#697077" }}>
                                    Only support .pdf and zip files
                                </Box>
                            </>
                    }
                </Box>
           
        </Box>
    );
}
