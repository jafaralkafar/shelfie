import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      editting: false,
      currentProduct: {}
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('error getting', err))
  }

  deleteProduct = id => {
    axios.delete(`/api/products/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('error deleting', err))
  }

  createProduct = (newProduct) => {
    axios.post('api/backgrounds', newProduct)
    .then(res => this.setState({inventory:res.data}))
    .catch(err => console.log('error creating', err))
  }

  setEditting = id => {
    let product = this.state.inventory.find(product => +product.id === +id)
    this.setState({
      editting: true,
      currentProduct: product
    })
  }

  updateProduct = (id, product) => {
    axios.put(`/api/products/${id}`, product).then(res => {
      this.setState({
        inventory: res.data,
        editting: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );

  }
}

export default App;
