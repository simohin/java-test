import {FC, ReactNode} from "react";

interface NavigationButtonProps {
    onClick?: () => void
    hidden?: boolean
    children: ReactNode
}

const NavigationButton: FC<NavigationButtonProps> = (props: NavigationButtonProps) => (
    <button
        onClick={props.onClick}
        type={"button"}
        style={{
            textAlign: "center",
            alignItems: "center",
            display: props.hidden ? "none" : "flex",
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
    </button>
)

export {NavigationButton}
