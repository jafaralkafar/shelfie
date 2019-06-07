import React from 'react'
import Product from '../Product/Product'

export default function Dashboard(props) {
    return (
        <div className='productlist'>
            {props.products.map(product => {
                return (
                    <div key={product.id}>
                        <Product 
                            product={product}
                            deleteProduct={props.deleteProduct}
                            editProduct={props.editProduct}
                            setEditting={props.setEditting}/>
                    </div>
                )
            })}
        </div>
    )
}