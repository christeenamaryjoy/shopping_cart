import React from "react";

function QuantChangeButton(props) {
    const { text } = props;
    return <button onClick={props.onClick} className='count_button'>{text}</button>;
}

export default QuantChangeButton;