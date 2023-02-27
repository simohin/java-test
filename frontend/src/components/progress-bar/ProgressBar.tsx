import {styled} from "@mui/material";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";

const ProgressBar = styled(LinearProgress)(({theme}) => ({
    width: "100%",
    height: 20,
    margin: "30px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: '#fe900d',
    },
}));

export {ProgressBar}
