export default function Circle(props) {
    const rstyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.color,
        borderRadius: "50%",
        display: "inline-block",
    };

    return (
        <>
            <span style={rstyle}> </span>
        </>
    );
}
