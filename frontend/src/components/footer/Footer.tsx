import vk from "../../assets/VkLogo.svg"
import tg from "../../assets/TelegramLogo.svg"
import habr from "../../assets/HabrLogo.svg"
import hh from "../../assets/HhLogo.svg"
import {Box, Link} from "@mui/material";
import mir from "../../assets/MirLogo.svg";
import {SocialButton} from "../button/social";

const Footer = () => (
    <Box sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "35px 20px",
        borderTop: "1px solid rgb(10,10,20)",
        backgroundColor: "#194cb8"
    }}>
        <Box sx={{
            display: "flex",
            flexFlow: "row nowrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "3px"
        }}>
            <SocialButton href={"https://vk.com/mir_plat.form"} svg={vk}/>
            <SocialButton href={"https://t.me/mir_platform"} svg={tg}/>
            <SocialButton href={"https://habr.com/ru/company/nspk/blog/"} svg={habr}/>
            <SocialButton href={"https://ekaterinburg.hh.ru/employer/1654251"} svg={hh}/>
        </Box>
        <Box>
            <Link href={"https://mir-platform.ru/"}>
                <img height={16} src={mir}/>
            </Link>
        </Box>
    </Box>
)

export {Footer}
