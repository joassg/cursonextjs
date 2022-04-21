export default function NumeroDisplay(props) {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
            fontSize: "2rem",
            margin: "10px",
            color: "#fff",
            height: "10vh",
            width: "10vh",
            borderRadius: "5vh"
        }}>
            {props.numero}
        </div>
    )
}