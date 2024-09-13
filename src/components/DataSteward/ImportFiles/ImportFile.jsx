import { useSelector } from "react-redux";
import FileUpload from "./FileUpload"
import DataGridForFileUpload from "./DataGridForFileUpload";
import { Box } from "@mui/material";
import SummaryDetails from "./SummaryDetails";

const ImportFile = () => {
    const fileUploaded = useSelector((state) => state.dataStewardValue.fileUploaded);
    console.log({ fileUploaded })
    return (
        <Box component={"section"}
            sx={{
                padding: "16px 26px 15px 20px",
                height: "100%"
            }}>

            {
                !fileUploaded ?
                    <FileUpload /> :
                    <>
                        <SummaryDetails />
                        <DataGridForFileUpload />
                    </>
            }
        </Box>
    )
}

export default ImportFile