import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookmarkBtn } from '../../redux/Benchmark';
import { Button, Typography } from '@mui/material';
import EditSvgIcon from "../../assets/svg-icons/EditIcon.svg"

export default function Filters() {
    const bookmarkBtn = useSelector((state) => state.benchmarkValue.bookmarkBtn);
    const dispatch = useDispatch();
    
    const list = () => (
        <Box
            role="presentation"
        >
            <Typography sx={{ fontSize: "16px", color: "#21272A", marginBottom: "12px", fontWeight: "700" }}>
                Bookmark
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                <Button variant='contained' sx={{ boxShadow: "none", textTransform: "capitalize", padding: "6px 23px", flexDirection: "column", color: "#fff", borderRadius: "0px", fontSize: "10px" }}>
                    <p style={{ margin: "0px" }}>
                        Save As
                    </p>
                    New Bookmark
                </Button>
                <Button variant='outlined' sx={{ textTransform: "capitalize", padding: "6px 23px", flexDirection: "column", borderRadius: "0px", fontSize: "10px" }}>
                    <p style={{ margin: "0px" }}>
                        Save As
                    </p>
                    Current Bookmark
                </Button>
            </Box>
            <Typography sx={{ fontSize: "16px", color: "#21272A", marginTop: "44px", fontWeight: "700" }}>
                Recent
            </Typography>
            <Box sx={{ display: "flex",gap: "23px", flexDirection: "column", marginTop: "15px" , maxHeight: "370px", overflow: "auto"}}>
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
                    <Box>
                        <Typography sx={{fontSize: "12px", color: "#000000"}}>Dep acct usage rate (per $100)</Typography>
                        <Typography sx={{fontSize: "12px", color: "#697077"}}component={"span"}>Supplier 1,2</Typography>
                    </Box>
                    <img height={"20px"} width={"20px"} src={EditSvgIcon} style={{color: "#697077", cursor: "pointer"}} alt="edit-svg" onClick={()=>{}}/>
                </Box>
                

            </Box>
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor={"right"}
                open={bookmarkBtn}
                PaperProps={{
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "320px", padding: "58px 30px 16px 30px"
                    }
                }}
            >
                {list()}
                <Box sx={{display: "flex", flexDirection: "row-reverse"}}>
                    <Button onClick={() => dispatch(updateBookmarkBtn(false))} variant="contained" sx={{boxShadow: "none",fontSize: "14px",color: "#fff", marginLeft: "20px",  textTransform: "capitalize",}}>
                        Apply
                    </Button>
                    <Button  onClick={() => dispatch(updateBookmarkBtn(false))} sx={{fontSize: "14px", color: "#21272A",  textTransform: "capitalize",}}>
                        Cancel
                    </Button>
                </Box>
            </Drawer>
        </div>
    );
}
