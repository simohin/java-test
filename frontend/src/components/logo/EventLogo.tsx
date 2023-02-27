import {Box} from "@mui/material";
import logo from "../../assets/EventLogo.svg";

const EventLogo = () => (
    <Box sx={{
        position: "relative",
        left: "-5vw",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "14px",
        width: "110vw",
        height: "70px",
        padding: "0 8px",
        border: "1px solid rgb(10,10,20)",
        backgroundColor: "#dfdfdf",
        transformOrigin: "right top",
        transform: "rotate(-4deg)",
        userSelect: "none",
        top: "-20px",
        marginBottom: "60px"
    }}>
        <Box sx={{
            width: "100%",
            height: "43px",
            backgroundSize: "contain",
            backgroundImage: `url(${logo})`
        }}/>
    </Box>
)

export {EventLogo}
