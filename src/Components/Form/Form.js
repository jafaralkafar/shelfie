import React, { Component } from 'react'


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgUrl: '',
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentProduct.name !== this.props.currentProduct.name) {
            this.setState({
                name: this.props.currentProduct.name,
                price: this.props.currentProduct.price,
                imgUrl: this.props.currentProduct.imgUrl
            })
        }
    }

    updateProduct = () => {
        const { id } = this.props.currentProduct
        let { name, price, imgUrl } = this.state
        let updatedProduct = {
            name,
            price,
            imgUrl
        }
        this.props.updateProduct(id, updatedProduct)
    }

    createProduct = () => {
        let newProduct = this.state
        this.props.createProduct(newProduct)
        
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }

    handleInput = e => {
        let {value, name} = e.target

        this.setState({
            [name]: value
        })
    }


    render() {
        let defaultImage = this.state.imgUrl === '' ? 'https://via.placeholder.com/150x100?text=Image' : this.state.imgUrl
        const {editting} = this.props
        return (
            <div className='form'>
                <img style={{height:'100px', width:'80%', alignSelf:'center'}}src={defaultImage} alt="product" />
                <p>Image URL:</p>
                <input 
                    type='text'
                    name='imgUrl'
                    value={this.state.imgUrl}
                    onChange={this.handleInput}/>
                <p>Product Name:</p>
                <input 
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInput}/>
                <p>Price:</p>
                <input 
                    type='text'
                    name='price'
                    value={this.state.price}
                    onChange={this.handleInput}/>
                <span>
                    <button onClick={()=> this.setState({name:'', price:0, imgUrl:''})}>Cancel</button>
                    {editting ? (
                        <button onClick={this.updateProduct}>Update Inventory</button>
                    ) : (
                        <button onClick={this.createProduct}>Add to Inventory</button>
                    )}
                </span>
            </div>
        )
    }
}