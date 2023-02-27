import {FC, ReactNode} from "react";
import arrow from "../../../assets/Arrow.svg"

interface PrimaryButtonProps {
    onClick: () => void
    children: ReactNode
}

const PrimaryButton: FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => (
    <button
        onClick={props.onClick}
        type={"button"}
        style={{
            margin: "50px 0",
            fontFamily: "PressStart2P",
            color: "#fff",
            height: "70px",
            padding: "0 50px",
            backgroundColor: "#fe900d",
            boxShadow: "4px 4px #0a0a14, inset 4px 4px #ff9e29",
            fontSize: "20px",
            lineHeight: "110%",
            cursor: "pointer"
        }}>
        {props.children}
        <img style={{marginLeft: "20px"}} src={arrow}/>
    </button>
)

export {PrimaryButton}
