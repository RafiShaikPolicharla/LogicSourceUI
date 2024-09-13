import { Box, Button, Icon, ListItemText, Menu, MenuItem } from '@mui/material'
import FILTER_SVG from "../../assets/svg-icons/filter.svg"
import UPLOAD_SVG from "../../assets/svg-icons/upload.svg"
import BOOKMARK_SVG from "../../assets/svg-icons/bookmark.svg"
import { useDispatch, useSelector } from 'react-redux';
import { updateBookmarkBtn, updateCreateScenarioPrice, updateFileUploadBtn, updateFilterBtn, updateShowScenarioPrice } from '../../redux/Benchmark';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import MuiListItem from "@material-ui/core/ListItem";
import PopupState, {
    bindPopover,
    bindHover,
    bindTrigger
} from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { withStyles } from "@material-ui/core/styles";
import { List } from '@material-ui/core';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { bindMenu, usePopupState } from 'material-ui-popup-state/hooks';
const ListItem = withStyles({
    root: {
        "&:hover": {
            backgroundColor: "#dddddd",

        }
    },
    selected: {}
})(MuiListItem);

const Title = () => {
    const dispatch = useDispatch();
    const showScenarioPrice = useSelector((state) => state.benchmarkValue.showScenarioPrice);
    const tableData = useSelector((state) => state.benchmarkValue.data.tableData) || [];
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: "flex", position: 'relative', marginTop: { xs: "48px", sm: "0px" }, flexDirection: { xs: "row", sm: "row-reverse" }, justifyContent: "space-between", alignItems: "center", borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ borderBottom: 2, position: "absolute", fontSize: "16px", left: 0, top: { xs: "-48px", sm: '15px' }, fontWeight: "700", paddingBottom: '8px', borderColor: '#04ABD7' }}>
                    Benchmark Pricing
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                    <Box sx={{ display: "flex", gap: "6px" }}>
                        <Box component={"button"}  disabled={!(tableData?.data?.length>0)} onClick={() => console.log("clicked")} variant="contained" {...bindTrigger(popupState)} sx={{ border:"none", height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            <SummarizeOutlinedIcon sx={{ color: '#fff', cursor: "pointer" }} />
                        </Box>
                        
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={() => {
                                dispatch((updateShowScenarioPrice(true)))
                                popupState.close()

                            }}>View Scenario</MenuItem>
                            <MenuItem onClick={() => {
                                dispatch((updateCreateScenarioPrice(true)))
                                popupState.close()

                            }}>Create Scenario</MenuItem>
                        </Menu>

                        <Box component={"button"} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            {/* <UPLOAD_SVG />
                             */}
                            <ModeEditOutlinedIcon sx={{ height: 25, width: 25, color: '#fff', cursor: "pointer" }} />
                        </Box>
                        <Box component={"button"} onClick={() => dispatch(updateFileUploadBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            
                            <FileUploadOutlinedIcon sx={{ height: 25, width: 25, color: '#fff', cursor: "pointer" }} />
                        </Box>
                        {/* <Box component={"button"} onClick={() => dispatch(updateBookmarkBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            <BookmarkBorderOutlinedIcon sx={{ height: 25, width: 25, color: '#fff', cursor: "pointer" }} />
                        </Box> */}
                        <Box component={"button"} onClick={() => dispatch(updateFilterBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            <FilterAltOutlinedIcon sx={{ height: 25, width: 25, color: '#fff', cursor: "pointer" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Title