import { Box, Icon, Tooltip } from '@mui/material'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import FILTER_SVG from "../../assets/svg-icons/filter.svg"
import UPLOAD_SVG from "../../assets/svg-icons/upload.svg"
import BOOKMARK_SVG from "../../assets/svg-icons/bookmark.svg"
import { useDispatch, useSelector } from 'react-redux';
import { updateBookmarkBtn, updateFileUploadBtn, updateFilterBtn, updateShowScenarioPrice } from '../../redux/Benchmark';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// export const FilterIcon = () => {
//     return (
//         <SvgIcon component={FILTER_SVG} viewBox="0 0 600 476.6" />
//     )
// }
// export const UploadIcon = () => {
//     return (
//         <SvgIcon component={UPLOAD_SVG} viewBox="0 0 600 476.6" />
//     )
// }
// export const BookmarkIcon = () => {
//     return (
//         <SvgIcon component={BOOKMARK_SVG} viewBox="0 0 600 476.6" />
//     )
// }

const Title = () => {
    const dispatch = useDispatch();
    const showScenarioPrice = useSelector((state) => state.benchmarkValue.showScenarioPrice);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: "flex", position: 'relative', marginTop: { xs: "48px", sm: "0px" }, flexDirection: { xs: "row", sm: "row-reverse" }, justifyContent: "space-between", alignItems: "center", borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ borderBottom: 2, position: "absolute", fontSize: "16px", left: 0, top: { xs: "-48px", sm: '15px' }, fontWeight: "700", paddingBottom: '8px', borderColor: '#04ABD7' }}>
                    Benchmark Pricing
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                    <Box sx={{ display: "flex", gap: "6px" }}>
                        <Tooltip title={`${showScenarioPrice ?  "Show Scenario Price" : "Hide Scenario Price"}`}>
                            <Box component={"button"} onClick={() => dispatch(updateShowScenarioPrice(!showScenarioPrice))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                                {/* <UPLOAD_SVG />
                             */}
                                {showScenarioPrice ? <VisibilityOffOutlinedIcon sx={{ color: '#fff', cursor: "pointer" }} /> : <RemoveRedEyeOutlinedIcon sx={{ color: '#fff', cursor: "pointer" }} />}
                            </Box>
                        </Tooltip>

                        <Box component={"button"} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            {/* <UPLOAD_SVG />
                             */}
                            <ModeEditOutlinedIcon sx={{ height: 25, width: 25, color: '#fff', cursor: "pointer" }} />
                        </Box>
                        <Box component={"button"} onClick={() => dispatch(updateFileUploadBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            {/* <UPLOAD_SVG />
                             */}
                            <Icon >
                                <img src={UPLOAD_SVG} alt="Test Icon" color='white' width={20} height={20} />
                            </Icon>
                        </Box>
                        <Box component={"button"} onClick={() => dispatch(updateBookmarkBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            <Icon >
                                <img src={BOOKMARK_SVG} alt="Test Icon" width={20} height={20} />
                            </Icon>
                        </Box>
                        <Box component={"button"} onClick={() => dispatch(updateFilterBtn(true))} border={"none"} sx={{ height: "48px", width: "48px", justifyContent: "center", alignItems: "center", cursor: "pointer", display: "flex", background: "#04ABD7", color: "white" }}>
                            <Icon >
                                <img src={FILTER_SVG} alt="Test Icon" width={20} height={20} />
                            </Icon>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Title