const mongoose = require('mongoose')

console.log("PRODUCT JS")

mongoose.connect('mongodb://localhost:27017/flashCards', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPAN!!!")
    })
    .catch(err => {
        console.log("OH NOES ERROR!!!", err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    onSale:{
        type: Boolean,
        default: false
    }

})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({
    name: 'Mountain Bike',
    price: 599
})
bike.save()
    .then(data => {
        console.log("Bike worked")
        console.log(data)
    })
    .catch(err => {
        console.log("Bike work no no no err")
        console.log(err)
    })