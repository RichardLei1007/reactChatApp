import "./Message.css";

export default function Message(props) {
    return (
        <div className="message">
            {props.msg}
            <img className = "profile"></img>
        </div>
    );
}