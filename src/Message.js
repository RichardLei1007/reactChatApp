import "./Message.css";

export default function Message(props) {
    return (
        <div className="message">
            <div className = "messageText">
                <span className = "usernameText">{props.user}</span>
                <span>{props.text}</span>
            </div>
            <div className = "profile"></div>
        </div>
    );
}