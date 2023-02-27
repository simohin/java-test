import {Typography} from "@mui/material";
import React from "react";
import {PrimaryButton} from "../../components/button/primary";
import {MainLayout} from "../../layout/main";
import {useNavigate} from "react-router-dom";


const Main = () => {
    const navigate = useNavigate()

    return (
        <MainLayout>
            <Typography color={"white"} variant="h3" fontFamily={"PressStart2P"}>
                Выполни все задания и выиграй призы!
            </Typography>
            <PrimaryButton onClick={() => navigate("/tasks")}>Начать игру</PrimaryButton>
        </MainLayout>
    )
}

export {Main}
