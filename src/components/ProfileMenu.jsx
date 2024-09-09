import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {  Button } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import UserImage from "../assets/user_Image.png";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
const styles = theme => ({
    // margin: {
    //   margin: theme.spacing.unit * 2
    // },
    customBadge: {
      backgroundColor: "#dddddd",
      color: "white",
      border: "50%"
    }
  });

  const BadgeIcon = withStyles(styles)(SimpleBadge);
  function SimpleBadge(props) {
    const { classes } = props;
    return (
      <div>
        <Badge classes={{ badge: classes.customBadge }}
          className={classes.margin}
          badgeContent={5}>
                    <NotificationsNoneIcon />
                </Badge>
      </div>
    );
  }
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function ProfileMenu({searchBarClicked}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <React.Fragment>
            <Box className={`${searchBarClicked ? "navbar-profile" : ""}`} sx={{ display: "flex", alignItems: "center", gap: {xs:"20px", lg: "41px"}, color: "black" }}>

                <BadgeIcon />
                <Box sx={{position: "relative", display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    {/* <Tooltip title="Account settings" componentsProps={{
                        tooltip: {
                            sx: {
                                bgcolor: '#fff',
                                '& .MuiTooltip-arrow': {
                                    color: 'red',
                                },
                            },
                        },
                    }} > */}
                        <Button
                            id="profile-customized-button"
                            aria-controls={open ? 'profile-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            // disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon style={{ color: "rgb(118 104 104)" }} />}
                            style={{ backgroundColor: "#fff" }}
                        >
                            <Avatar sx={{ height: "39px", width: "39px", mr: "5px" }} alt="User Image" src={UserImage} variant="square"/>
                            <p className="navbar-profile-name" style={{ color:"black", textTransform: "capitalize" }}>
                                Primary User
                            </p>
                            {/* <Typography
                                component="h2"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Primary User
                            </Typography> */}
                        </Button>
                    {/* </Tooltip> */}
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    // onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            backgroundColor: "white",
                            color: "black",
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'white',
                                transform: 'translateY(50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {/* <MenuItem onClick={handleClose}>
                    <Avatar />
                    {USER_ADMIN ? "Manage Profile" : "My Profile"}
                </MenuItem> */}
                    <MenuItem onClick={() => {
                        localStorage.removeItem("userData");
                        window.location.reload();
                    }}>
                        <ListItemIcon>
                            <Logout sx={{color: "black"}} fontSize="small" />
                        </ListItemIcon>
                        Log out
                    </MenuItem>
                </Menu>
            </Box>
        </React.Fragment>
    );
}
