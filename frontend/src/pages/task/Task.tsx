import {useNavigate, useParams} from "react-router-dom";
import {FC, ReactNode, useEffect, useRef, useState} from "react";
import {Heading} from "../../components/typography";
import {ProgressBar} from "../../components/progress-bar";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {Box, Typography} from "@mui/material";
import {NavigationButton} from "../../components/button/navigation";
import arrow from "../../assets/Arrow.svg";
import {PrivateLayout} from "../../layout/private";
import {backendApi} from "../../api";

const api = backendApi()

interface TaskNavButtonsProps {
    id: number,
    total: number,
    action: () => void
    solved: boolean
}

const TaskNavButtons: FC<TaskNavButtonsProps> = (props: TaskNavButtonsProps) => {
    const navigate = useNavigate()

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <NavigationButton
                onClick={() => navigate(`/tasks/${props.id - 1}`)}
                hidden={(props.id == 1)}>
                <img style={{
                    transform: "rotate(180deg)",
                    transformOrigin: "center",
                    marginLeft: "20px"
                }}
                     src={arrow}
                     alt={'arrow'}/>
            </NavigationButton>
            <NavigationButton
                hidden={props.solved}
                onClick={props.action}>
                <Typography
                    variant={'body1'}
                    fontFamily={'PressStart2P,monospace'}>
                    Проверить
                </Typography>
            </NavigationButton>
            <NavigationButton
                onClick={() => navigate(`/tasks/${props.id + 1}`)}
                hidden={props.id == props.total}>
                <img style={{
                    marginLeft: "20px"
                }}
                     src={arrow}
                     alt={'arrow'}/>
            </NavigationButton>
        </Box>
    )
}

interface TaskWrapperProps {
    hidden?: boolean
    title: string
    progress: number
    children: ReactNode
}

const TaskWrapper: FC<TaskWrapperProps> = (props: TaskWrapperProps) => (
    <PrivateLayout hidden={props.hidden}>
        <ProgressBar variant="determinate" value={props.progress}/>
        <Heading variant={"h3"}>{props.title}</Heading>
        {props.children}
    </PrivateLayout>
)

const Task = () => {
    const [solved, setSolved] = useState(false)
    const {id} = useParams();
    const numberId = parseInt(id ? id : '1')
    const [progress, setProgress] = useState(0)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");
    const [total, setTotal] = useState(0);
    const ref = useRef(false)

    useEffect(() => {
        if (!ref.current) {
            api.get(
                `tasks/java/${id}`
            ).then(res => {
                setTitle(res.data.title)
                setDescription(res.data.description)
                setCode(res.data.code)
                setTotal(res.data.total)
                setSolved(res.data.solved)
            }).catch(e => {
                console.log(e)
            })
            ref.current = true
        }
    })

    useEffect(() => {
        api.get("status/java")
            .then(res => {
                setProgress(res.data.progress / total * 100)
            })
            .catch(e => {
                console.log(e)
            })
    }, [solved])

    const checkSolution = () => {
        api.post(
            `tasks/java/${id}`,
            {
                code: code
            }
        ).then(res => {
            setSolved(res.data.success)
        }).catch(e => {
            console.log(e)
        })
    };

    return (
        <>
            <TaskWrapper
                hidden={!solved}
                title={title}
                progress={progress}>
                <Heading variant={"h3"}>
                    Задание выполнено!
                </Heading>
                <TaskNavButtons id={numberId} total={total} action={checkSolution} solved={solved}/>
            </TaskWrapper>
            <TaskWrapper
                hidden={solved}
                title={title}
                progress={progress}>
                <Heading margin={"20px"} variant={"h6"}>{description}</Heading>
                <CodeEditor
                    data-color-mode="dark"
                    value={code}
                    language="java"
                    placeholder="Начните вводить код сюда"
                    onChange={(e) => setCode(e.target.value)}
                    padding={15}
                    style={{
                        width: "100%",
                        margin: 20,
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'PressStart2P,monospace',
                    }}
                />
                <TaskNavButtons id={numberId} total={total} action={checkSolution} solved={solved}/>
            </TaskWrapper>
        </>
    )
}

const InitialTask = () => {
    const navigate = useNavigate()

    const [state] = useState();
    useEffect(() => {
        api.get("tasks")
            .then(res => {
                navigate(`/tasks/${res.data.id}`)
            })
            .catch(e => {
                console.log(e)
            })
    }, [state])

    return (
        <PrivateLayout>
            <></>
        </PrivateLayout>
    )
}

export {InitialTask, Task}
