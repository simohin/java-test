import {Header} from "../../components/header";
import {Box, Container} from "@mui/material";
import {Footer} from "../../components/footer";
import React, {FC, ReactNode} from "react";


interface MainLayoutProps {
    hidden?: boolean
    children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = (props: MainLayoutProps) => (
    <Box sx={{
        height: "100%",
        minHeight: "100vh",
        display: props.hidden ? "none" : "flex",
        flexDirection: "column"
    }}>
        <Header/>
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "992px",
        }}>
            {props.children}
        </Container>
        <Footer/>
    </Box>
)

export {MainLayout}
