import {MainLayout} from "../../layout/main";
import {Heading} from "../../components/typography";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {Input} from "../../components/input";
import {PrimaryButton} from "../../components/button/primary";
import {backendApi} from '../../api';

const cookies = new Cookies()
const api = backendApi()

const Registration = () => {
    const [state, setState] = useState(0)
    const navigate = useNavigate()

    const [name, setName] = useState<string>()

    useEffect(() => {
        if (cookies.get("USER_ID")) navigate("/tasks")
    }, [state])

    const onButtonClicked = () => {
        api.post(
            `registration`,
            {name: name},
        )
            .then(res => {
                console.log(res)
                setState(state + 1)
            })
            .catch(e => {
                console.log(e)
            })
    };

    return (<MainLayout>
        <Heading variant={"h3"}>
            Сначала давай познакомимся. Как тебя зовут?
        </Heading>
        <Input id={"name"} onChange={setName} placeholder={"Введи своё имя"}/>
        <PrimaryButton onClick={onButtonClicked}>Отправить</PrimaryButton>
    </MainLayout>)
}

export {Registration}
