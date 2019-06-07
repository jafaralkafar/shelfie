import React from 'react'


export default function Product(props) {
    return (
        <div style={{background: '#D34735', marginTop:'40px', height:'175px', justifyItems:'center'}}>
            <span><img style={{width:'175px', float:'left'}}src={props.product.img} alt="product" /></span>
            <p>{props.product.name}</p>
            <p>{`$${props.product.price}`}</p>
            <button onClick={()=>props.deleteProduct(props.product.id)}>Delete</button>
            <button onClick={()=>props.setEditting(props.product.id)}>Edit</button>
        </div>
    )
}