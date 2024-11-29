import {ReactNode} from "react";

export default function ButtonComponentClickProps(props: { onSelect: any; children: ReactNode }) {
    return (
        <>
            <button onClick={()=>{props.onSelect()}}>{props.children}</button>
        </>
    );
}
