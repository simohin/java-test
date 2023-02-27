import {FC, ReactNode} from "react";
import {Typography} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";

interface HeadingProps {
    margin?: string
    children: ReactNode
    color?: string
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

const Heading: FC<HeadingProps> = (props: HeadingProps) => (
    <Typography
        sx={{
            inlineSize: "100%",
            overflowWrap: "break-word"
        }}
        fontFamily={"PressStart2P"}
        color={props.color ? props.color : "white"}
        variant={props.variant ? props.variant : "h1"}
        margin={props.margin}
    >
        {props.children}
    </Typography>
)

export {Heading}
