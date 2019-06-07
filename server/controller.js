module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(console.log(err)))
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        db.create_product(req.body).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        let product = req.body
        product.id = id
        db.edit_product(product).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_product(id).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}