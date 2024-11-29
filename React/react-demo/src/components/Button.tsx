export default function Button(props: any) {

    let value = props.count;

    if (props.children === "Add") {
        value = value + 1;
    } else {
        value = value - 1;
    }

    return (
        <>
            <button onClick={() => { props.setCount(value) }}>{props.children} </button>
        </>
    )
}