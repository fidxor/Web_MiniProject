import React from 'react'

function WishListItem({ item }) {
    const divStyle = {
        display: 'flex',
    }

    

    return (
        <>
        <div style={divStyle}>
            <img src={item.img} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>{item.price}</p>
        </div>
        </>
    )
}

export default WishListItem;