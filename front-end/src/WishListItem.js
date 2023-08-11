import React from 'react'

function WishListItem({ item }) {
    const divStyle = {
        display: 'flex',
    }

    return (
        <>
        <div>
        <div style={divStyle}>
            <img src={item.img} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>Price: ${item.price}</p>
            <input type='checkbox'/>
        </div>
        </div>
        </>
    )
}

export default WishListItem;