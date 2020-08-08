import React from "react";

function Button(props) {
    const { text } = props;
    return <button onClick={props.onClick} className='button'>{text}</button>;
}

export default Button;