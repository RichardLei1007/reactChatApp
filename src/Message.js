import "./Message.css";

export default function Message(props) {
    return (
        <div className="message">
            <div className = "messageText">{props.msg}</div>
            <div className = "profile"></div>
        </div>
    );
}