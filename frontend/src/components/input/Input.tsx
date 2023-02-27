import {FC} from "react";

interface InputProps {
    id: string,
    onChange: (value: string) => void
    placeholder: string
}

const Input: FC<InputProps> = (props: InputProps) => (
    <input
        type={"text"}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        id={props.id}
        style={{
            width: "291px",
            height: "65px",
            fontFamily: "PressStart2P",
            fontSize: "19px",
            paddingLeft: "12px",
            marginTop: "40px",
            background: "#FFFFFF",
            boxShadow: "inset 3px 3px #0a0a14, inset -3px -3px 4px #adadad",
        }}/>
)

export {Input}
