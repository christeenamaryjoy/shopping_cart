import React from "react";

function Button(props) {
    const { text } = props;
    return <button onClick={props.onClick} className={props.type === 'count'?'count_button' : 'button'}>{text}</button>;
}

export default Button;