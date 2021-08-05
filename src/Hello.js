import React from 'react'

function Hello(props) {
    return (
        <div>
            <h1>{props.name} and {props.values}</h1>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Hello
