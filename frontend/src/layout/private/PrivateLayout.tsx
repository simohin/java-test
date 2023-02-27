import {FC, ReactNode, useEffect, useState} from "react";
import {MainLayout} from "../main";
import Cookies from 'universal-cookie'
import {useNavigate} from "react-router-dom";

interface PrivateLayoutProps {
    hidden?: boolean
    children: ReactNode
}

const cookies = new Cookies()

const PrivateLayout: FC<PrivateLayoutProps> = (props: PrivateLayoutProps) => {
    const [state] = useState()
    const navigate = useNavigate()
    const userId = cookies.get("USER_ID");
    useEffect(() => {
        if (!userId) navigate("/registration")
    }, [state])
    return (<MainLayout hidden={props.hidden}>
        {props.children}
    </MainLayout>)
}

export {PrivateLayout}
