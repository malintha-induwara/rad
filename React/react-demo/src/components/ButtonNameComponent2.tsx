import {ReactNode} from "react";

export default function ButtonNameComponent2(props: { children:ReactNode }) {
    return (
        <>
            <button>{props.children}</button>
        </>
    )
}

