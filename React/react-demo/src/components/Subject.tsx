import {ReactNode} from "react";

export default function Subject(props: { name: string, children: ReactNode }) {
    return (
        <>
            <h1> {props.name} </h1>
            <p>{props.children}</p>
        </>
    )
}