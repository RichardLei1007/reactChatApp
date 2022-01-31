import "./Message.css";

export default function Message(props) {
    return (
        <div className="message">
            {props.msg}
            <div className = "profile"></div>
        </div>
    );
}