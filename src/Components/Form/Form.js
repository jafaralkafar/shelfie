import React, { Component } from 'react'


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    handleInput = e => {
        let {value, name} = e.target

        this.setState({
            [name]: value
        })
    }


    render() {
        let defaultImage = this.state.imgUrl === '' ? 'https://via.placeholder.com/150x100' : this.state.imgUrl
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
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </span>
            </div>
        )
    }
}