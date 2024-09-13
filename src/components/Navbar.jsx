import { AppBar, Toolbar, IconButton, Box, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import brandLogo from "../assets/logic_source_logo.png";
// import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import ProfileMenu from './ProfileMenu';


// eslint-disable-next-line react/prop-types
const Navbar = ({ handleDrawerToggle }) => {
    const [searchBarClicked, setSearchBarClicked] = useState(false);

    useEffect(() => {
        console.log({ searchBarClicked })
        if (searchBarClicked) {
            document.getElementById('navbar-search-input');
            const element = document.getElementById('input-with-icon-textfield').focus();
            console.log({ element })
        }
    }, [searchBarClicked])

    // const handleSearchIconClicked = () => {
    //     setSearchBarClicked(true)

    // }
    return (
        <Box>
            <AppBar  position="fixed" sx={{
                boxShadow: {md:"none"},
                padding: "0px 10px  !important",
                // maxWidth: "1460px",
                justifyContent: "center", height: "68px", backgroundColor: '#ffffff'
            }} >
                <Toolbar className={`${searchBarClicked ? 'navbar-search-position-around' : 'navbar-search-positon-between'}`} disableGutters sx={{ justifyContent: "space-between" }}>
                    <Box className="navbar-brand-flex" sx={{ display: "flex", alignItems: "center", gap: {xs:"20px",md:"103px"  }}}>
                        <Box className={`${searchBarClicked ? "navbar-brand-logo-container" : ""}`} sx={{ display: "flex",marginLeft: {xs: "0px",md: "64px"}, alignItems: "center" }}>
                            <IconButton
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, mt: "10px", color: "#797979", display: { md: 'none' } }}
                            >
                                <MenuIcon sx={{ fontSize: '25px' }} />
                            </IconButton>
                            <Box
                                component={"img"}
                                src={brandLogo}
                                alt={"Brand-Logo"}
                                loading="lazy"
                                sx={{
                                    height:{xs: "30px",md:"48px"},
                                    width:{md:"128px"}
                                }}
                            />
                        </Box>
                        {/* <TextField
                            className={`${searchBarClicked ? 'navbar-search-clicked"' : 'navbar-search-hide'}`}
                            id="input-with-icon-textfield"
                            placeholder='Search...'
                            sx={{ input: { color: 'black' } }}
                            onFocus={() => setSearchBarClicked(true)}
                            onBlur={() => setSearchBarClicked(false)}
                            SelectProps={{
                                classes: {
                                    nativeInput: "navbar-search-input"
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon onClick={handleSearchIconClicked} sx={{ color: '#797979', }} />
                                    </InputAdornment>
                                ),
                                autoFocus: searchBarClicked ? true : false,
                                disableUnderline: false
                            }}
                            variant="standard"
                            autoFocus={searchBarClicked ? true : false}
                        /> */}
                    </Box>
                    <ProfileMenu searchBarClicked={searchBarClicked} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;