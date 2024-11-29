export default function ButtonComponentClick() {
    const handleClick = () => {
        alert("clicked");
    }
    return (
        <>
            <button onClick={handleClick}>Click me</button>

        </>
    )
}