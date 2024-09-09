import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// mainBackgroundColor = "#F5F7F6"
// applicationMainColor= #04ABD7
// color design tokens export

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#F5F7F6",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      },
    }
    : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#04ABD7",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#04ABD7",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      primary: {
        main: '#04ABD7',
      },
      secondary: {
        light: '#000000',
        main: '#04ABD7',
      },
      linearProgress: {
        main: '#1976d2',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
      customText: {
        white: '#fff',
        dark: '#3B4655',
        darkLight: '#6D7888',
        darkGrey: '#DBDBDB',
        lightBlackText: '#3B3A39',
        darkest: '#000',
        textReset: '#004F9A',
        lightGrey: '#555759',
      },
      customBorder: {
        darkGrey: '#DBDBDB',
      },
      customBackground: {
        grey: '#DEDEDE',
        lightBlue: '#4297D3',
        activeButtonBackground: '#0099D8',
        disabledBackground: '#f2f2f2',
        white: '#fff',
      },
      customShadowColor: {
        grey: '#1F3E6929',
      },
      customColor: {
        horizontalLineColor: '#CECECE',
      },
      whitebgbox: {
        borderRadius: "5px",
        width: "97%",
        marginTop: "20px",
        bgcolor: "white",
        height: "100%",
      },
      noAvailableText: {
        font: 'normal normal 600 12px/15px \'Segoe UI\' ',
        color: 'rgba(59, 70, 85, 1)',
      },
      commonWhiteBg: {
        bgcolor: '#eff6fc',
        // height: '78vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '0px',
      },
      AddNewTableButton: {
        'transform': 'translateY(-80px)',
        'marginBottom': '-70px',
        'backgroundColor': '#4297d3',
        'color': '#ffffff',
        'textTransform': 'none',
        'minWidth': '0',
        'padding': '5px 10px',
        'marginTop': '10px',
        'float': 'right',
        'font': 'normal normal 600 13px/19px \'Segoe UI\'',
        '&:hover': {
          backgroundColor: '#4297d3',
        },
        SaveandEdit: {
          'border': '1px solid gray',
          'display': 'flex', 'border': '0.5px solid #CECECE', 'borderRadius': '4px',
          'width': '58px', 'alignItems': 'center', 'gap': '5px', 'padding': '2px 6px',
          'cursor': 'pointer'
        }
      },
      AddFilterTableButton: {
        'backgroundColor': '#4297d3',
        'color': '#ffffff',
        'textTransform': 'none',
        'minWidth': '0',
        'width': '110px',
        'textAlign': 'center',
        'height': '30px',
        'borderRadius': '3px',
        'padding': '5px 10px',
        'float': 'right',
        'cursor': 'pointer',
        'font': 'normal normal 600 13px/19px \'Segoe UI\'',
        '&:hover': {
          backgroundColor: '#4297d3',
        },
      },
      TextArea: {
        padding: '5px'
      },
      filterDropdown: {
        minWidth: '144px',
        maxWidth: '144px',
        minHeight: '40px',
        marginTop: '13px',
      },
      filterSubmit: { width: '110px', height: '40px' },
      resetbutton: { width: '66px', height: '17px', whiteSpace: 'noWrap', fontSize: '12px' },
      filterheading: { width: '84px', height: '19px', whiteSpace: 'noWrap', fontSize: '14px', fontWeight: 'bold' },
      dropdownItemStyle: { 'fontSize': '12px !important', 'whiteSpace': 'normal', 'fontFamily': 'Segoe UI', 'color': 'blue' },
      TableHead: { fontSize: '12px', display: 'flex', alignItems: 'center' },
      TableEdit: { width: '62px', height: '22px' },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
// // mui theme settings
// export const themeSettings = (mode) => {
//   const colors = tokens(mode);
//   return {
//     palette: {
//       mode: mode,
//       ...(mode === "dark"
//         ? {
//             // palette values for dark mode
//             primary: {
//               main: colors.primary[500],
//             },
//             secondary: {
//               main: colors.greenAccent[500],
//             },
//             neutral: {
//               dark: colors.grey[700],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: colors.primary[500],
//             },
//           }
//         : {
//             // palette values for light mode
//             primary: {
//               main: colors.primary[100],
//             },
//             secondary: {
//               main: colors.greenAccent[500],
//             },
//             neutral: {
//               dark: colors.grey[700],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: colors.primary[100],
//             },
//           }),
//     },
// };

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

// const StyledButton = withStyles({
//   root: {
//     backgroundColor: '#3c52b2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#fff',
//       color: '#3c52b2',
//   },
// }})(Button);