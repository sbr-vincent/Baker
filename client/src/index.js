import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5f473e",
        },
        secondary: {
            main: '#B85E40'
        },
        background: {
            paper: '#E5894E'
        }
    },
    typography: {
        myVariant : {
            backgroundColor: '#B85E40'
        }
    }
});

// {
// "Brown sugar":"B85E40",
// "Earth yellow":"F7C379",
// "Persian orange":"E5894E",
// "Chestnut":"9D523C",
// "Persian orange 2":"D5966A"
// }

// {
//     "Brown sugar":"b85e40",
// "Liver":"5f473e",
// "Buff":"cfa287",
// "Brown sugar 2":"b97551",
// "Van Dyke":"544039"
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
