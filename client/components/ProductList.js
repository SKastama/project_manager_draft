import React from "react";

export default props => {
    return(
        <div>
            {props.product.mmap((product, index) => {
                return <p key={index}>{product.title}, {product.price}, {product.description}</p>
            })}
        </div>
    )
}

export default PersonList;