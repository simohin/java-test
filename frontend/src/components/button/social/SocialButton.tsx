import {FC, useEffect, useState} from "react";
import {Link} from "@mui/material";

interface SocialButtonProps {
    svg: string
    href: string
}

const SocialButton: FC<SocialButtonProps> = (props: SocialButtonProps) => {
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
    }, [isHover])

    return (
        <Link href={props.href}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                  border: "none",
                  padding: "8px",
                  backgroundColor: "#fff",
                  boxShadow: isHover ? "3px 3px " + "#fe900d" : "3px 3px " + "#0a0a14"
              }}>
            <img src={props.svg}/>
        </Link>
    )
}

export {SocialButton}
