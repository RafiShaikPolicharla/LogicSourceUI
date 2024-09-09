import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroImage from "../assets/homepage-hero-image.png"
import LogicSourceLogo from "../assets/logicsource-image.png"
import { IconButton, InputAdornment, InputLabel } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import localize from "../assets/lang/en";

import { useEffect, useRef, useState } from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserState, updateCurrentSidebarTab, updateLoading } from '../redux';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {/* {'Copyright © '} */}
            Privacy | Legal {new Date().getFullYear()} LogicSource, Inc. All Rights Reserved.
            {/* <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '} */}
        </Typography>
    );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userRef = useRef();
    const errRef = useRef();
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const userName = localStorage.getItem("user-name") || "";
        const pwd = localStorage.getItem("password") || "";
        userRef.current.focus();
        if (userName && pwd) {
            setUserName(userName);
            setPwd(pwd);
            setRememberMe(true)
            return;
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [userName, pwd])


    const handleSubmit = async (e) => {
        const regexValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        e.preventDefault()
        if (userName === "") {
            setErrMsg("UserName is Required");
        } else if (pwd === "") {
            setErrMsg("Password is Required");
        } else if (!regexValidation.test(pwd)) {
            setErrMsg("Password must be a combination of minimum 8 letters, numbers and symbols.");
        } else {
            setDisableButton(true);
            dispatch(updateLoading(true))
            try {
                // const userDetails = { username: userName, password: pwd };
                // const response = await axios.post(LOGIN_API,
                //     userDetails,
                //     {
                //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                //         // withCredentials: true
                //     }
                // );
                // const userData = response.data?.data;
                const userData = {
                    userLogged: true,
                    userName: "Demo User",
                    accessToken: "accessToken",
                    refreshToken: "refreshToken",
                }
                window.localStorage.setItem('userData', JSON.stringify(userData));
                dispatch(setUserState(userData));
                setUserName('');
                setPwd('');
                // if (userData.role === "admin") {
                //     dispatch(updateActiveTab("manageProfile"));
                // } else {
                //     dispatch(updateActiveTab("/portfolio"));
                // }
                saveCreditionalsForRememeber()
                navigate("/");
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response! Please try after sometime.');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password.');
                } else if (err.response?.status === 401) {
                    setErrMsg('Username or Password is wrong.');
                } else {
                    setErrMsg('Login Failed.');
                }
                errRef.current.focus();
            } finally {
                setDisableButton(false);
                dispatch(updateLoading(false))
            }
        }
    }

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const saveCreditionalsForRememeber = () => {
        if (rememberMe) {
            localStorage.setItem("user-name", userName); localStorage.setItem("password", pwd)
        }
        else {
            localStorage.setItem("user-name", ""); localStorage.setItem("password", "")
        }
    }

    const handleRemember = (checkedValue) => {
        setRememberMe(checkedValue);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        console.log({ userName, pwd });
    }, [userName, pwd])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid className='main-login-form' sx={{
                height: {xs: "100vh" },
                paddingLeft: { xs: "10px", sm: "30px", md: "30px" },
                paddingRight: { xs: "10px", sm: "30px", md: "30px" },
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
                justifyContent: "center",
                // height: '100%', 
                display: "flex",
                background: `url(${HeroImage})`,
                backgroundColor: "#445863",
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}>
                <CssBaseline />
                {/* <Grid
                    className='LogicSourceHeroTitle'
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    lg={8}
                    sx={{ display: "flex", alignItems: "center", background: "transparent", boxShadow: 'none' }}
                    // paddingLeft={3}
                    component={Paper} elevation={6}
                    square
                >
                    <Box sx={{
                        // my: 8,
                        // mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#99F1FD'
                    }}>
                        <Typography component="h1" sx={{ fontSize: "30px", fontFamily: "Helvetica", fontWeight: "bold", color: "#99f1fd", }} variant="h6" fontWeight={700} alignSelf={"flex-start"}>
                            {localize.login.message.greeting}
                        </Typography>
                        <Typography component="h5" sx={{ fontSize: "90px", fontFamily: "Helvetica", fontWeight: "bold", color: "#99f1fd", }} variant="h3" fontWeight={700} alignSelf={"flex-start"}>
                            LogicSource
                        </Typography>
                        <Typography component="h1" variant="h6" sx={{ fontSize: "28.65x", fontFamily: "Helvetica", fontWeight: "bold", color: "#99f1fd", }} fontWeight={700} alignSelf={"flex-start"}>
                            {localize.login.message.desc}
                        </Typography>
                    </Box>
                    </Grid> */}
                    <Box component={"img"} src={LogicSourceLogo} sx={{ height: {xs:"70px"} }} alt={"logic_source_image"}></Box>

                <Grid className='loginForm' sx={{marginTop:"7px", marginBottom:"7px",borderRadius: "0px"
                    // height: {lg: '707px'},
                    // width: {lg: "600px"},
                }} item xs={12} sm={7} lg={4} md={5}
                    // sx={{ margin: '70px 50px', padding: "32px 0px" }} 
                    component={Paper} elevation={6} >
                    <Box
                        className="loginFormContainer"
                        sx={{
                            // mx: 8,
                            // height: '600px',
                            // width:"707px",
                            padding: { xs: "20px", sm: "20px 40px", },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <Typography  ypography component="h6" sx={{ alignSelf:"center",textTransform: "uppercase", fontSize: { lg: "18px" }, fontFamily: "Helvetica", }} color="#635858" variant="h5"  alignSelf={"flex-start"}>
                            Welcome Please Login
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{width: "100%", mt: 1 }}>
                            <InputLabel htmlFor="email" sx={{ marginBottom: '9px'}}>
                                Email Address
                            </InputLabel>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon fontSize='10px' />
                                        </InputAdornment>
                                    ),
                                }}
                                margin="normal"
                                ref={userRef}
                                // required
                                sx={{ margin: 0, marignBottom: "8px" }}
                                fullWidth
                                id="email"
                                // label="Email Address"
                                name="email"
                                autoComplete="email"
                                placeholder='Email Address'
                                autoFocus
                                variant="filled"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <InputLabel htmlFor="password" sx={{marginTop: "20px", marginBottom: '9px'}}>
                                Password
                            </InputLabel>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon fontSize='10px' />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOffOutlined fontSize='10px' /> : <VisibilityOutlined fontSize='10px' />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ margin: 0 }}

                                onChange={(e) => setPwd(e.target.value)}
                                margin="normal"
                                // required
                                value={pwd}
                                fullWidth
                                name="password"
                                variant="filled"
                                // label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                id="password"
                                autoComplete="current-password"
                                helperText="It must be a combination of minimum 8 letters, numbers and symbols."
                                FormHelperTextProps={{
                                    style: {
                                        margin: 0, // Change the font size
                                    },
                                }}
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Grid container sx={{ alignItems: "center", marginBottom: "17px" }}>
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={rememberMe} onChange={e => handleRemember(e.target.checked)} name="remember" />}
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Link href="#" sx={{ color: "black", textDecoration: "none" }} variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box>
                                <p ref={errRef} style={{
                                    color: 'red',
                                    fontSize: "14px",
                                }} required id="demo-radio-buttons-group-label">{errMsg}</p>
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={disableButton}
                                color='primary'
                                sx={{backgroundColor: "#04ABD7", borderRadius: 0}}
                                onClick={() => dispatch(updateCurrentSidebarTab('/benchmark-pricing'))}
                                padding={0}
                            >
                                Log In
                            </Button>
                            {/* <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                            <Copyright sx={{ mt: 2 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}