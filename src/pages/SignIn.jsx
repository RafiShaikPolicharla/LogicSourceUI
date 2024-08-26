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
import { IconButton, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import { useEffect, useRef, useState } from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserState, updateLoading } from '../redux';
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
        const regexValidation =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

        e.preventDefault()
        if (userName === "") {
            setErrMsg("UserName is Required");
        } else if (pwd === "") {
            setErrMsg("Password is Required");
        } else if(!regexValidation.test(pwd)) {
            setErrMsg("Password must be a combination of minimum 8 letters, numbers and symbols.");
        }else {
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
                navigate("/portfolio");
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

    useEffect(()=>{ 
        console.log({userName, pwd});
    }, [userName, pwd])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container className='main-login-form' sx={{
                height:'940px',
                paddingLeft: "80px",
                paddingRight: "80px",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "nowrap",
                justifyContent: "center",
                // height: '100%', 
                backgroundImage:
                    `url(${HeroImage})`,
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}>
                <CssBaseline />
                <Grid
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
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#99F1FD'
                    }}>
                        <Typography component="h1" variant="h6" fontWeight={700} alignSelf={"flex-start"}>
                            WELCOME TO
                        </Typography>
                        <Typography component="h5" lineHeight={1.6} variant="h3" fontWeight={700} alignSelf={"flex-start"}>
                            LogicSource
                        </Typography>
                        <Typography component="h1" variant="h6" fontWeight={700} alignSelf={"flex-start"}>
                            Your Partner In Procurement Excellence
                        </Typography>
                    </Box>
                </Grid>

                <Grid className='loginForm' item xs={12} sm={7} lg={4} md={5}
                    // sx={{ margin: '70px 50px', padding: "32px 0px" }} 
                    component={Paper} elevation={6} >
                    <Box
                        className="loginFormContainer"
                        sx={{
                            // my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <img src={LogicSourceLogo} style={{ height: "70px", marginBottom: "10px" }} alt={"logic_source_image"}></img>
                        <Typography component="h6" variant="h5" fontWeight={700} alignSelf={"flex-start"}>
                            Log In
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                placeholder='Email Address'
                                autoFocus
                                variant="filled"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
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
                                onChange={(e) => setPwd(e.target.value)}
                                margin="normal"
                                // required
                                value={pwd}
                                fullWidth
                                name="password"
                                variant="filled"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                id="password"
                                autoComplete="current-password"
                                helperText="It must be a combination of minimum 8 letters, numbers and symbols."
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Grid container sx={{ alignItems: "center" }}>
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
                                padding={0}
                            >
                                Sign In
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