import {Box} from "@mui/material";
import {EventLogo} from "../logo";
import mir from "../../assets/MirLogo.svg";

const Header = () => (
    <Box
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <img style={{margin: "30px 0 10px"}} width={209} height={23} src={mir}/>
        <EventLogo/>
    </Box>
)

export {Header}
